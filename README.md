# TamperGmail
A suite of tampermonkey scripts designed to enhance HTML gmail functionality.
These scripts are used in 
[TamperMonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo),
but you can use any other userscript chrome extension

## Features:
- [X] Dark Mode for HTML Gmail
- [X] Select All & Deselect All
- [X] Load the tampermonkey script asap

## TODO:
- [X] Change the tamperscripts to only target html gmail, not Standard View
- [X] Change color of header links to fit dark theme
- [ ] New Email Notifications
    * Polling every 5 minutes and if unread email number increments, then
      change title of browser tab with number of new unread emails.
    * When the browser tab is focused on html gmail, reset counter of new
      unread emails to 0.
- [ ] Schedule Send
    * Viewing scheduled mail and sending scheduled mail
- [ ] Google Chat integration
    * Includes Spaces and Chats.
    * Must include critical features from modern gmail into html gmail:
        * [ ] Support rich text like bold, italic, underline, bulleted list and strikethrough.
        * [ ] Send multimedia like anytype files, emoji, and gifs.
        * [ ] Fuzzy search in chat
        * [ ] Adjustable chat window size
