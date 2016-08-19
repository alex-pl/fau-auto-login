'use strict';

let pageMod = require('sdk/page-mod');

pageMod.PageMod({
    include: /https:\/\/www.sso.uni-erlangen.de\/simplesaml\/module.php\/core\/loginuserpass.php.*/,
    contentScriptFile: './sso.js'
});

pageMod.PageMod({
    include: /https:\/\/www.studon.fau.de\/studon\/.*/,
    contentScriptFile: './studon.js'
});

pageMod.PageMod({
    include: /https:\/\/www.campus.uni-erlangen.de\/qisserver\/rds.*/,
    contentScriptFile: './campus.js'
});
