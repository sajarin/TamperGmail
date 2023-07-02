// ==UserScript==
// @name         'Select all' in Basic HTML View in Gmail
// @namespace    http://vaxquis.tk
// @version      0.1
// @description  An easy way to select all mails in HTML Gmail
// @author       vaxquis, Shaedil
// @match        https://mail.google.com/mail/u/*/h/*/*
// @grant        none
// ==/UserScript==

function createToggleButton(textContent, backgroundColor, textColor, borderColor, onClickHandler) {
  const button = document.createElement('BUTTON');
  button.style.marginRight = '1rem';
  button.style.backgroundColor = backgroundColor;
  button.style.color = textColor;
  button.style.borderColor = borderColor;
  button.textContent = textContent;
  button.onclick = onClickHandler;
  return button;
}

const toggleButton = createToggleButton('Toggle Select', '#2a2a37', '#DCD7BA', '#54546d', () => {
  const checkboxes = document.querySelectorAll('input[name=t]');
  const areAllSelected = Array.from(checkboxes).every(checkbox => checkbox.checked);
  
  checkboxes.forEach(checkbox => {
    checkbox.checked = !areAllSelected;
  });

  return false;
});

const target = document.querySelector('form[name=f] table td');
target.insertBefore(toggleButton, target.children[0]);
