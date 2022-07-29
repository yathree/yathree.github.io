// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
// const baseUrl = 'http://192.168.8.101:8281';
const baseUrl = 'http://102.223.7.34:8281';
// const baseUrl = 'http://localhost:8281';

export const environment = {
  production: false,
  appTitle: 'Mamlaka ya usafiri na usalama barabarani',
  logoTitle: 'ZODLAP',
  baseUrl: `${baseUrl}/api`,
  // whitelistedDomains: [baseUrl, '192.168.8.101', '192.168.8.101:8281'],
  whitelistedDomains: [baseUrl, '102.223.7.34', '102.223.7.34:8281'],
  // whitelistedDomains: [baseUrl, 'localhost', 'localhost:8281'],
  blacklistedRoutes: [`${baseUrl}/api/signin`],
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
