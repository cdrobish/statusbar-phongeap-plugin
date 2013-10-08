# StatusBar for Cordova

Originally by Patrick Heneise ([@PatrickHeneise](http://twitter.com/PatrickHeneise), [about.me/PatrickHeneise](http://about.me/PatrickHeneise)).
Updated by Chad Drobish, [website](http://chadandrewdrobish.com)

Addapted for ios7 by jota-v.

Change the style of the status bar in iOS, in any instance of your app. You can show it, hide it, change the tint to white or black. All transitions are animated. <strong>Phonegap 3.0+ compatible.</strong>

## Installation

1) Make sure that you have [Node](http://nodejs.org/) and [Cordova CLI](https://github.com/apache/cordova-cli) or [PhoneGap's CLI](https://github.com/mwbrooks/phonegap-cli) or [Cordova Plugman](https://github.com/apache/cordova-plugman/) installed on your machine.

2) Add a plugin to your project using [Cordova CLI](https://github.com/apache/cordova-cli):

```bash
cordova plugin add https://github.com/cdrobish/statusbar-phongeap-plugin
```

Or using [PhoneGap CLI](https://github.com/mwbrooks/phonegap-cli):

```bash
phonegap local plugin add https://github.com/cdrobish/statusbar-phongeap-plugin
```

Or using [plugman CLI](https://github.com/apache/cordova-plugman#command-line-usage):

```bash
plugman --platform ios --project ./platforms/ios --plugin https://github.com/cdrobish/statusbar-phongeap-plugin
```

3) Edit your .plist (Located in Xcode Project > Resources
Add Key 'View controller-based status bar appearance' and set value to NO

*Note*
If you'd like the default color to be white you can also add key 'Status bar style' and set value to UIStatusBarStyleLightContent

## How it works

    statusbar.hide();
    statusbar.show();
    statusbar.whiteTint(callback);
    statusbar.blackTint(callback);

Enjoy!