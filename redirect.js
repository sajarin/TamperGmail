// ==UserScript==
// @name         Redirect to HTML Gmail
// @namespace    http://example.com
// @version      1.0
// @description  Redirects Gmail to HTML Gmail
// @author       Sajarin
// @match        https://mail.google.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Check if the current page is not HTML Gmail
    if (!location.href.includes('mail/u/0/h')) {
        // Redirect to the HTML Gmail page
        location.href = 'https://mail.google.com/mail/u/0/h';
    }
})();
