# FAU Auto-Login
This Add-on automates the login process on several FAU (Friedrich-Alexander-Universität Erlangen-Nürnberg) websites.

Supported sites:
* SSO login page (Username and password have to be filled via the browsers password manager!)
* StudOn (redirect to SSO login page)

Feel free to suggest additional sites!

## Add-on Downloads
* Firefox Add-on: https://addons.mozilla.org/firefox/addon/fau-auto-login/

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

## MIT License (MIT)

Copyright (c) 2015 Alexander Ploner

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
