# FAU Auto-Login
This Add-on automates the login process on several FAU (Friedrich-Alexander-Universität Erlangen-Nürnberg) websites.

Supported sites:
* SSO login page (Username and password have to be filled via the browsers password manager!)
* StudOn (redirect to SSO login page)

Feel free to suggest additional sites!

## Add-on Downloads
* Firefox Add-on: [TODO]

## Developer Notes
This is a hybrid Add-on which can be exported as a JPM-Add-on as well as a WebExtension. Both extension types use the same Add-on identifier as it doesn't make sense to install both versions at the same time. Additionaly only one of both versions will be available at Firefox Add-ons.

### JPM specific files
* package.json
* index.js
* .jpmignore

Create and install Add-on with `jpm xpi; open fau-auto-login@*.xpi` (Mac)

### WebExtension specific files
* manifest.json

Create and install Add-on with `zip fau-auto-login.xpi manifest.json README.md *.png data/*; open fau-auto-login.xpi` (Mac)
