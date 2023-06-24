// ==UserScript==
// @name         HTML Gmail Dark Mode
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  Dark mode for HTML Gmail
// @author       Shaedil, Sajarin
// @run-at       document-start
// @match        https://mail.google.com/mail/u/*/h/*/*
// @require      file://C:/Users/Home PC/Desktop/TamperGmail/darkmode.js
// @grant        none
// ==/UserScript==

(function() {
  'use strict';
  var css = `\
  body {\
    background-color: #1F1F28 !important; \
  }\
  textarea, input, select {\
    background-color: #2A2A37 !important;\
    border-color: #54546D !important;\
    color: #DCD7BA !important;\
  }\
  a {\
    color: #7AA89F !important;\
    // links like inbox, compose mail, contacts, spam, and links in emails.
  \}
  td>a {\
    color: #938AA9 !important;\
  }\
  a#gb_71 {\
    color: #ffa066 !important;\
  }\
  a.gb4:not(span[id='gbe']), div[id='gbar']>nobr a.gb1{\
    color: #ffa066 !important;\
  }\
  .th td, .th th {\
    border-bottom: 1px solid #1f1f28 !important;\
  }\
  tr {\
    background-color: #1F1F28 !important;\
    color: #DCD7BA !important;\
  }\
  td {\
    background-color: #1f1f28 !important;\
    color: #DCD7BA !important;\
  }\
  table {\
    background-color: #2A2A37;\
  }\
  b {\
    color: #7E9CD8 !important;\
    // bolded text like unread sender, title, older/newer button, email address, notifs
  }\
  font {\
    color: #ff9e3b !important;\
    // email labels
  }\
  font[color='#7777CC'] {\
    color: #98BB6C !important;\
    // all email body excerpt
  }\
  tbody > tr > td:nth-child(2) > form > table.th > tbody > tr[bgcolor='#FFFFFF'] > td[nowrap=''] > b {\
    color: #FF5D62 !important;\
    // unread email date & time column
  }\
  tbody > tr > td:nth-child(2) > form > table.th > tbody > tr[bgcolor='#E8EEF7'] > td[nowrap=''] {\
    color: #D27E99 !important;\
    // read email date & time column
  }\
  tbody > tr > td:nth-child(2) > form > table.th > tbody > tr[bgcolor='#E8EEF7'] > td:nth-child(3) > a > span.ts > font[color='#7777cc'] {\
    color: #727169 !important;
    // unread email body excerpt
  }\
  input[type='checkbox'] {\
    accent-color: #7fb4ca !important;\
  }\
  .msg>div>*,\
  tr>td>.msg>div>div>* {\
    color: #DCD7BA !important;\
  }\
  div[style='background-color:#ffffff'] {\
    background-color: #2A2A37 !important;\
  }\
  tbody > tr > td:nth-child(2) > form > table.th > tbody > tr[bgcolor='#FFFFFF'] > td {\
    background-color: #2a2a37 !important;\
    color: #D27E99 !important;\
    // unread emails everything
  }\
  tbody > tr > td:nth-child(2) > form > table.th > tbody > tr[bgcolor='#E8EEF7'] > td,\
  tr[bgcolor='#E8EEF7'] > td {\
    background-color: #1f1f28 !important;\
    color: #957FB8 !important;
    // read emails everything
  }\
  tr[bgcolor='#FFFFFF'] > td > a > span[class='ts'] {\
    background-color: #2a2a37 !important;\
    // unread emails middle column\
  }\
  span.ar {\
    padding-left: 1px;\
    padding-right: 0.25px;\
    align-items: center;\
    justify-content: center;\
    display: flex;\
  }\
  td[bgcolor='#C3D9FF'] {\
    background-color: #2a2a37 !important;\
  }\
  span[style='font-weight:bold'], span[style='font-weight:bold']>strong {\
    color: #DCA561 !important;\ 
    // is mainly for github explore
  }\
  div[style='color:#586069'], div[style='color:#586069;margin:4px 0'] {\
    color: #717C7C !important;\ 
  }\
  p {\
    color: #DCD7BA !important;\
  }\
  h1 {\
    display: block !important;\
  }\
  h2 {\
    color: #D27E99 !important;\
  }\
  `;
  var style = document.createElement("style");
  style.appendChild(document.createTextNode(css));
  document.head.appendChild(style);
  document.addEventListener('DOMContentLoaded', function() {
    const divElements = document.querySelectorAll('div[style]');
    divElements.forEach(div => {
      if (div.style.backgroundColor === 'rgb(255, 255, 255)') {
        div.style.backgroundColor = '#1F1F28';
      }
    });
  });
})()
