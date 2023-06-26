// ==UserScript==
// @name         HTML Gmail Dark Mode
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  Dark mode for HTML Gmail
// @author       Shaedil, Sajarin
// @run-at       document-start
// @match        https://mail.google.com/mail/u/*/h/*/*
// @grant        none
// ==/UserScript==

(function() {
  'use strict';
  var css = `\
  @import url('https://fonts.googleapis.com/css2?family=Lexend:wght@100;200;300;400;500;600;700;800;900&family=Nunito+Sans:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;0,1000;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900;1,1000&display=swap');
  body, html {\
    background-color: #1F1F28 !important;\
    font-family: 'Lexend', sans-serif !important;\
  }\
  textarea, input, select {\
    background-color: #2A2A37 !important;\
    border-color: #54546D !important;\
    color: #DCD7BA !important;\
  }\
  button {\
    font-family: 'Lexend', sans-serif !important;\
  }\
  .nav ul li.on {\
    background-color: #2A2A37 !important;\
  }\
  a {\
    color: #7AA89F !important;\
    font-family: 'Lexend', sans-serif !important;\
    // links like inbox, compose mail, contacts, spam, and links in emails.
  \}
  td>a {\
    color: #938AA9 !important;\
  }\
  nobr {\
    color: #DCD7BA !important;\
  }\
  a#gb_71 {\
    color: #ffa066 !important;\
  }\
  a.gb4:not(span[id='gbe']), div[id='gbar']>nobr a.gb1{\
    color: #ffa066 !important;\
    text-decoration: none !important;\
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
    font-family: 'Lexend', sans-serif !important;
    // bolded text like unread sender, title, older/newer button, email address, notifs
  }\
  font {\
    color: #ff9e3b !important;\
    // email labels
  }\
  font[color='#7777CC'] {\
    color: #98BB6C !important;\
    font-family: 'Nunito Sans', sans-serif !important;
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
  input[type='submit'], select[name='tact']>option {\
    font-family: 'Lexend', sans-serif !important;\
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
    font-family: 'Lexend', sans-serif !important;
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
  div[style='background-color:#fff'] {\
    background-color: #1f1f28 !important;
  }\
  h1, h1[style='color:#333'] {\
    display: block !important;\
    color: #DCD7BA !important;
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


