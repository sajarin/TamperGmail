// ==UserScript==
// @name         'Select all' in Basic HTML View in Gmail
// @namespace    http://vaxquis.tk
// @version      0.1
// @description  An easy way to select all mails in HTML Gmail
// @author       vaxquis, Shaedil
// @match        https://mail.google.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    const target = document.querySelector('form[name=f] table td');
    const button = document.createElement('BUTTON');
    const button2 = document.createElement('BUTTON');
    const text = document.createTextNode('Select all');
    const text2 = document.createTextNode('Deselect all');
    button.style.marginRight = '1rem';
    button.style.backgroundColor = 'darkblue';
    button.style.color = 'white';
    button.style.borderColor = 'blue'
    button.appendChild( text );
    button.onclick = () => {
        document.querySelectorAll('input[name=t]').forEach( t => { t.checked = true; } );
        return false;
    }
    button2.style.marginRight = '1rem';
    button2.style.backgroundColor = 'darkred';
    button2.style.color = 'white';
    button2.style.borderColor = 'red'
    button2.appendChild( text2 );
    button2.onclick = () => {
        document.querySelectorAll('input[name=t]').forEach( t => { t.checked = false; } );
        return false;
    }
    target.insertBefore(button, target.children[0]);
    target.insertBefore(button2, target.children[1]);
})();
