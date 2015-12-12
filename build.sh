case "$1" in
    xpi)
        # generate add-on xpi for Firefox
        mkdir -p build/firefox \
        && cp -R data       build/firefox \
        && cp package.json  build/firefox \
        && cp icon*.png     build/firefox \
        && cp index.js      build/firefox \
        && cd build/firefox \
        && jpm xpi \
        && mv `echo *.xpi` ../.. \
        && cd ../.. \
        && echo "xpi add-on created"
        ;;

    xpi-web)
        # generate webextension xpi for Firefox
        zip fau-auto-login.xpi manifest.json icon*.png data/* \
        && echo "xpi webextension created"
        ;;

    crx)
        # generate Chrome/Opera files for crx extensions
        mkdir -p build/chrome \
        && cp -R data               build/chrome \
        && cp manifest.chrome.json  build/chrome/manifest.json \
        && cp icon*.png             build/chrome \
        && cd build/chrome \
        && zip -r ../fau-auto-login.zip . \
        && cd ../.. \
        && echo "crx extension files created in build/chrome/"
        ;;

    run-ff)
        # open xpi in Firefox via Extension Auto-Installer
        curl --data-binary @`echo *.xpi` -H 'Expect:' http://localhost:8888/ \
        && echo "Install successful"
        ;;

    *)
        echo "commands:"
        echo "   xpi       generate add-on xpi for Firefox"
        echo "   xpi-web   generate webextension xpi for Firefox"
        echo "   crx       generate crx extension files for Chrome/Opera"
        echo "   run-ff    install xpi file in Firefox (Extension Auto-Installer required)"
esac
