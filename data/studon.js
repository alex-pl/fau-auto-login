'use strict';

// check if StudOn login page is opened
if (document.getElementById('shibLoginHead')) {

    // trigger login, if StudOn login page is opened
    document.getElementById('shibLoginHead').querySelector('a').click();

} else {

    // otherwise try to redirect to StudOn login page
    let loginPageLink = document.getElementById('mm_login_tr')
    if (loginPageLink) {
        loginPageLink.click();
    }

}
