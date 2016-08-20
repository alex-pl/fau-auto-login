[![Build Status](https://travis-ci.org/alex-pl/fau-auto-login.svg?branch=master)](https://travis-ci.org/alex-pl/fau-auto-login)

# FAU Auto-Login

This Add-on automates the login process on several [FAU](https://www.fau.de/) (Friedrich-Alexander-Universität Erlangen-Nürnberg) websites.


## Add-on Downloads
* [Firefox Desktop](https://addons.mozilla.org/firefox/addon/fau-auto-login/)
* [Firefox for Android](https://addons.mozilla.org/android/addon/fau-auto-login/)
* [Chrome](https://chrome.google.com/webstore/detail/mmfijonpcpoiapcfmfieaaccmljmkidf/)
* [Opera](https://addons.opera.com/extensions/details/fau-auto-login/)
* Edge Extension will be published as soon as Microsoft allows it :)


## Supported Sites
Login (username and password have to be filled via the browsers password manager)
* SSO login page

Automatic redirect to the SSO login page
* StudOn
* mein campus

Feel free to suggest or implement additional sites! :)


## Developer Notes

### Set up

1.  Install a current version of [NodeJS](https://nodejs.org/en/download/).
2.  Install Gulp

    ```Shell
    npm install -g gulp
    ```
3. Install dependencies

    ```Shell
    npm install
    ```

### Build

All builds are created inside the `dist/` directory.

Build all Add-on versions:
```Shell
gulp
```

Build the Firefox extension (Desktop and Android):
```Shell
gulp firefox
```

Create the files for Chorme, Edge and Opera:
```Shell
gulp chrome
```


### Browser-Specific files

Not all browsers are able to use the same files.
The right file for every browser is selected during the build process.

* manifest.firefox.json => Firefox Desktop, Firefox Android
* manifest.chrome.json => Chrome, Edge, Opera


## MIT License (MIT)

Copyright (c) 2015 - 2016 Alexander Ploner

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
