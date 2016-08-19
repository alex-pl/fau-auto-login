'use strict';

let pageMod = require('sdk/page-mod'),
    passwords = require('sdk/passwords');

pageMod.PageMod({
    include: /https:\/\/www.sso.uni-erlangen.de\/simplesaml\/module.php\/core\/loginuserpass.php.*/,
    contentScriptFile: './sso.js',
    onAttach: startListening
});

pageMod.PageMod({
    include: /https:\/\/www.studon.fau.de\/studon\/.*/,
    contentScriptFile: './studon.js'
});

pageMod.PageMod({
    include: /https:\/\/www.campus.uni-erlangen.de\/qisserver\/rds.*/,
    contentScriptFile: './campus.js'
});

// waits until password manager is unlocked, if necessary
function startListening(worker) {
    worker.port.on('noLoginData', function () {

        passwords.search({
            url: 'https://www.sso.uni-erlangen.de',
            onComplete: function onComplete() {
                // credentials should have been filled in after master
                // password request, we do not really need to access
                // login data, just re-try to log in
                worker.port.emit('tryLogin');
            }
        });

    });
}
