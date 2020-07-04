// ==UserScript==
// @name         HTML Gmail Dark Mode
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  Dark mode for HTML Gmail
// @author       Shaedil, Sajarin
// @run-at       document-start
// @match        https://mail.google.com/mail/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var css = "body { background-color: #121212 !important; } textarea { background-color: #0f0f0f !important; color: #A3A3A3 !important; } a { color: #99A9C3 !important; } tr { background-color: #121212 !important; color: #B1B1B1 !important; } td { background-color: #121212 !important; color: #D3D3D3 !important } input, select { background-color: #0f0f0f !important; color: #D1D1D1 !important; border-color: #494949 !important;} table { background-color: #121212 !important; } b { color: #DEB263 !important; } .th td{ border-bottom: 1px solid #494949 !important; } nobr>a { color: #006633 !important;} a.gb1, a.gb4 { background-color: #fff !important;} span { background-color: #121212 !important; color: #F3F3F3 !important; } font { color: #FD6957 !important; } .msg>div>* { color: #A3A3A3 !important; } tr>td>.msg>div>div>* { background-color: #121212 !important;} tbody > tr > td:nth-child(2) > form > table.th > tbody > tr[bgcolor='#FFFFFF'] > td { background-color:#222222 !important; } tbody > tr > td:nth-child(2) > form > table.th > tbody > tr[bgcolor='#E8EEF7'] > td { background-color:#121212 !important; } tr[bgcolor='#FFFFFF'] > td > a > span[class='ts'] { background-color:#222222 !important; } tr[bgcolor='#E8EEF7'] > td { background-color:#121212 !important; } tr[bgcolor='#FFFFFF'] > td > a > span[class='ts'] > b { background-color:#222222 !important; } tr[bgcolor='#FFFFFF'] > td > a > span[class='ts'] > font[color='#7777CC'] { background-color:#222222 !important; } td[bgcolor='C3D9FF']{background-color:#3B5363 !important;}"
    var style = document.createElement("style");
    style.type = "text/css";
    style.appendChild(document.createTextNode(css));
    document.head.appendChild(style);
})()
