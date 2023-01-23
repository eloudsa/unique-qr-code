# Unique QR Code for iOS and Android

This sample application allows you to generate and share a unique QR code to allow your users to install an app from Google Play or App Store depending their smartphone.

## Create your environment file

Before running the app, you have to create a .env file with the following entries.

Here below an example to identify the mobile application from `Github`:

```
IOS_APP_ID=id1477376905
ANDROID_APP_ID=com.github.android
PORT=3000
```

The entry `PORT` is used to define a port number instead of the default one (port 80).

## Build the application

To build the app, install the dependencies.

With NPM:

```
npm install
```

With Yarn:

```
yarn
```

## Start the application

```
yarn start
```

If you want to automatically update the application while developing:

```
yarn startdev
```

## Open the application

From a browser, open your application such as:

```
http://localhost
```

On macOS, you have to allow incoming connections for your Node.js application.

The browser displays a unique QR code.

Scan the QR code with your device (iOS or Android).

The device should open the application on the store.
