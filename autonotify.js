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

    // Define the interval (in milliseconds) at which the page will automatically reload
    const reloadInterval = 60000; // 1 minute

    // Store the count of emails at the time of the last check
    let previousCount = null;

    // Retrieve the initial count of unread emails
    if (document.visibilityState === 'visible') {
        previousCount = getUnreadEmailCount();
    }

    // Start the auto-reload process
    startAutoReload();

    /**
     * Retrieves the count of unread emails from the Gmail UI (HTML version)
     * @returns {number} The count of unread emails
     */
    function getUnreadEmailCount() {
      const emailRows = document.querySelectorAll('table.th tbody tr');
      let unreadCount = 0;

      emailRows.forEach(row => {
        const bgColor = row.getAttribute('bgcolor');
        if (bgColor === '#ffffff') {
          unreadCount++;
        }
      });

      return unreadCount;
    }

    /**
     * Checks for new emails and displays a notification if the count has changed
     */
    function checkForNewEmails() {
      const currentCount = getUnreadEmailCount();

      // Check if the count has changed since the last check
      if (currentCount > previousCount) {
          // Calculate the number of new emails
          const newEmailsCount = currentCount - previousCount;

          // Display a notification only if the Gmail tab is not active
          if (document.visibilityState !== 'visible') {
              // Use the browser's toast notification system
              if ('Notification' in window && Notification.permission === 'granted') {
                  new Notification('New Emails', {
                      body: `You have ${newEmailsCount} new email(s).`
                  });
              }
          }

          // Update the previous count to the current count
          previousCount = currentCount;
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

      // Check for new emails every second
      setInterval(checkForNewEmails, 1000);
    }
})();
