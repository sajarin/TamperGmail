# TamperGmail
A suite of tampermonkey scripts to enhance html gmail functionality. This can only be used in conjunction with the google chrome extension TamperMonkey and other, related extensions. Our features include:

## Features:
- [X] Dark Mode for HTML Gmail
- [X] Select All & Deselect All
- [X] Load the tampermonkey script asap

## TODO:
- [ ] Change the tamperscripts to only target html gmail, not Standard View
   * HTML Gmail has seemingly random characters following its baseurl of `https://mail.google.com/mail/u/0/h/` but Standard View just has the baseurl.
   * Perhaps using a regex expression here in the target url, fitting all the alphabetic and numberic characters, can help.
- [ ] Change color of header links to fit dark theme
- [ ] Desktop Notification for New Emails
- [ ] Schedule Send
    * Viewing scheduled mail and sending scheduled mail
