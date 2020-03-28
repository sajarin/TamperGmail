// ==UserScript==
// @name         Schedule Send for HTML Gmail
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  View scheduled mail in HTML Gmail
// @author       Shaedil
// @match        https://mail.google.com/mail/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    // const target = document.querySelector('form[name=f] table td');
    const target = document.querySelector('a[href^="?&s]');
    const link = document.createElement('A');
    const textnode = document.createTextNode('Schedule Send');
    link.style.color = '#99A9C3';
    link.appendChild( textnode );
    link.link(window.location.href + "?s=q&q=in%3Ascheduled%20&nvp_site_mail=Search%20Mail");
    target.insertBefore(link, target.children[3]);
})()
