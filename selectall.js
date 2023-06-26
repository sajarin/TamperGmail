// ==UserScript==
// @name         'Select all' in Basic HTML View in Gmail
// @namespace    http://vaxquis.tk
// @version      0.1
// @description  An easy way to select all mails in HTML Gmail
// @author       vaxquis, Shaedil
// @match        https://mail.google.com/mail/u/*/h/*/*
// @grant        none
// ==/UserScript==

function createButton(textContent, backgroundColor, textColor, borderColor, onClickHandler) {
    const button = document.createElement('BUTTON');
    button.style.marginRight = '1rem';
    button.style.backgroundColor = backgroundColor;
    button.style.color = textColor;
    button.style.borderColor = borderColor;
    button.textContent = textContent;
    button.onclick = onClickHandler;
    return button;
}

const selectAllButton = createButton('Select all', '#76946A', '#F6FDDB', '#2B3328', () => {
    document.querySelectorAll('input[name=t]').forEach(t => { t.checked = true; });
    return false;
});

const deselectAllButton = createButton('Deselect all', '#C34043', '#F7FDDB', '#43242B', () => {
    document.querySelectorAll('input[name=t]').forEach(t => { t.checked = false; });
    return false;
});

const target = document.querySelector('form[name=f] table td');
target.insertBefore(selectAllButton, target.children[0]);
target.insertBefore(deselectAllButton, target.children[1]);
