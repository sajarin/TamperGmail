// ==UserScript==
// @name         Scheduled Mail for HTML Gmail
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  View and send scheduled mail in HTML Gmail
// @author       Shaedil
// @match        https://mail.google.com/mail/u/*/h/*/*
// @grant        none
// ==/UserScript==

(function() {
  'use strict';
  const target = document.querySelector('table.m tbody');
  const trow = document.createElement('TR');
  const td = document.createElement('TD');
  const link = document.createElement('A');
  link.textContent = 'Scheduled';
  link.href = "?s=q&q=in%3Ascheduled&nvp_site_mail=Search%20Mail";
  td.appendChild(link);
  trow.appendChild(td);
  target.insertBefore(trow, target.children[6]);
})()
