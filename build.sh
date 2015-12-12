case "$1" in
    xpi)
        # generate add-on xpi for Firefox
        jpm xpi
        echo "xpi add-on created"
        ;;

    xpi-web)
        # generate webextension xpi for Firefox
        zip fau-auto-login.xpi manifest.json README.md *.png data/*
        echo "xpi webextension created"
        ;;

    crx)
        # generate Chrome/Opera files for crx extensions
        mkdir -p build/chrome
        cp -R data build/chrome
        cp manifest.chrome.json build/chrome/manifest.json
        cp *.png build/chrome/
        cp README.md build/chrome/
        cd build/chrome
        zip -r ../fau-auto-login.zip .
        cd ../..
        echo "crx extension files created in build/chrome/"
        ;;

    run-ff)
        # open xpi in Firefox via Extension Auto-Installer
        curl --data-binary @`echo *.xpi` -H 'Expect:' http://localhost:8888/ && echo "Install successful"
        ;;

    *)
        echo "commands:"
        echo "   xpi       generate add-on xpi for Firefox"
        echo "   xpi-web   generate webextension xpi for Firefox"
        echo "   crx       generate crx extension files for Chrome/Opera"
        echo "   run-ff    install xpi file in Firefox (Extension Auto-Installer required)"
esac
