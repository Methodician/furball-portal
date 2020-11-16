// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const shouldUseEmulator = false;

export const environment = {
  production: false,
  shouldUseEmulator,
  firebaseConfig: {
    apiKey: "AIzaSyCztgbHdYCOVnKXKYRZT1sZ6QLgGjtm7Bk",
    authDomain: "furball-testing.firebaseapp.com",
    databaseURL: shouldUseEmulator ? 'http://localhost:9000/?ns=furball-testing': "https://furball-testing.firebaseio.com",
    projectId: "furball-testing",
    storageBucket: "furball-testing.appspot.com",
    messagingSenderId: "34374557563",
    appId: "1:34374557563:web:c415729b35a1b7ecb9e7de"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
