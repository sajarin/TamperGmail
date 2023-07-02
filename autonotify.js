// ==UserScript==
// @name         Gmail Auto Reload and Notification
// @namespace    http://example.com
// @version      1.0
// @description  Automatically reloads for new emails and creates a notification in Gmail (HTML version)
// @author       Sajarin
// @match        https://mail.google.com/*
// @grant        GM_notification
// ==/UserScript==

(function() {
  'use strict';

  // Ask for permission to show notifications
  if ('Notification' in window) {
    Notification.requestPermission();
  }

  // Define the interval (in milliseconds) at which the page will automatically reload
  const reloadInterval = 60000; // 1 minute

  // Store the timestamp of the first email in tbody
  if (localStorage.getItem('storedTimestamp') === null) {
    localStorage.setItem('storedTimestamp', null);
  }

  // Retrieve the timestamp
  if (document.visibilityState === 'visible') {
    localStorage.setItem('storedTimestamp', getFirstEmailTimestamp());
  }
  console.log('Stored timestamp: ' + localStorage.getItem('storedTimestamp'));

  // Start the auto-reload process
  startAutoReload();

  /**
   * Retrieves the timestamp of the first email in tbody
   * @returns {string|null} The timestamp of the first email
   */
  function getFirstEmailTimestamp() {
    const firstEmailRow = document.querySelector('table.th tbody tr:first-child td[width="1%"]:last-child');
    if (firstEmailRow) {
      return firstEmailRow.textContent.trim();
    }

    return null;
  }
  /**
   * Retrieves the title of the first email in tbody
   * @returns {string|null} The title of the first email
   */
  function getEmailTitle() {
    const firstEmailRow = document.querySelector('table.th tbody tr:first-child td[width="73%"] a span b');
    if (firstEmailRow) {
      return firstEmailRow.textContent.trim();
    }
    return null;
  }
  /**
   * Retrieves the sender of the first email in tbody
   * @returns {string|null} The sender of the first email
   */
  function getEmailSender() {
    const firstEmailRow = document.querySelector('table.th tbody tr:first-child td[width="25%"] b');
    if (firstEmailRow) {
      return firstEmailRow.textContent.trim();
    }
    return null;
  }
  function getEmailBody() {
    const firstEmailRow = document.querySelector('table.th tbody tr:first-child td[width="73%"] a span font[color="#7777CC"]');
    if (firstEmailRow) {
      return firstEmailRow.textContent.trim();
    }
    return null;
  }

  /**
   * Checks for new emails and displays a notification if the count has changed
   */
  function checkForNewEmails() {
    // Get the emails that have a timestamp more recent than the stored timestamp
    const newEmails = Array.from(document.querySelectorAll('table.th tbody tr')).filter(row => {
      const timestampCell = row.querySelector('td[width="1%"]:last-child');
      if (timestampCell && timestampCell.textContent.trim() > localStorage.getItem('storedTimestamp')) {
        return true;
      }
      return false;
    });

    const newEmailsCount = newEmails.length;

    // Display a notification only if the Gmail tab is not active and there are new emails
    if (document.visibilityState !== 'visible' && newEmailsCount > 0) {
      // Use the browser's toast notification system
      if ('Notification' in window && Notification.permission === 'granted') {
        new Notification(getEmailSender() + " - " + getEmailTitle(), {
          body: getEmailBody()
        });
      }
    }

    // Update the stored timestamp to the latest email timestamp
    if (newEmailsCount > 0) {
      const latestTimestamp = newEmails[newEmails.length - 1].querySelector('td[width="1%"]:last-child').textContent.trim();
      console.log('Latest timestamp: ' + latestTimestamp);
      localStorage.setItem('storedTimestamp', latestTimestamp);
    }
  }

  /**
   * Starts the auto-reload process
   */
  function startAutoReload() {
    let isDraftBeingEdited = false;

    setInterval(() => {
      if (!isDraftBeingEdited) {
        location.reload();
      }
    }, reloadInterval);

    // Pause the auto-reload process when a draft is being edited
    document.addEventListener('keydown', () => {
      const activeElement = document.activeElement;
      if (activeElement && (activeElement.getAttribute('role') === 'textbox' || activeElement.tagName === 'TEXTAREA')) {
        isDraftBeingEdited = true;
      }
    });

    document.addEventListener('focusout', () => {
      isDraftBeingEdited = false;
    });

    // Trigger the initial new email check
    checkForNewEmails();

    // Check for new emails every 10 second
    setInterval(checkForNewEmails, 10000);
  }
})();
