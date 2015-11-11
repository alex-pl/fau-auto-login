'use strict';

let pageMod = require('sdk/page-mod');

pageMod.PageMod({
    include: /https:\/\/www.sso.uni-erlangen.de\/simplesaml\/module.php\/core\/loginuserpass.php.*/,
    contentScriptFile: './sso.js'
});

pageMod.PageMod({
    include: /http:\/\/www.studon.uni-erlangen.de\/studon\/.*/,
    contentScriptFile: './studon.js'
});
