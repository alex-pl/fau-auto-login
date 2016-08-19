'use strict';

// check if StudOn login page is opened
let loginArea = document.getElementById('shibLoginHead');
if (loginArea) {

    // trigger login, if StudOn login page is opened
    loginArea.querySelector('a').click();

} else {

    // otherwise try to redirect to StudOn login page
    let loginPageLink = document.getElementById('mm_login_tr');
    if (loginPageLink) {
        loginPageLink.click();
    }

}
