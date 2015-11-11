'use strict';

// stop on error
if (!document.querySelector('.error')) {

    // check if login data is entered
    if (document.getElementById('username').value &&
        document.getElementById('password').value) {

        // get login form and submit it
        let form = document.querySelector('form[name="f"]');
        form.submit();

    }

}
