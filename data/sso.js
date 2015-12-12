'use strict';

let formular,
    username,
    password;

function tryLogin() {
    if (username.value &&
        password.value) {

        // get login form and submit it
        formular.submit();
        return true;

    }

    return false;
}

// do nothing, if an error message is shown
if (!document.querySelector('.error')) {

    formular = document.querySelector('form[name="f"]');

    if (formular) {
        username = document.getElementById('username');
        password = document.getElementById('password');

        if (!tryLogin()) {
            // if no login data is entered, try to get it from password manager
            // => this opens the master password dialog, if necessary
            self.port.on('tryLogin', tryLogin);
            self.port.emit('noLoginData');
        }
    }

}
