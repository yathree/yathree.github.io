const baseUrl = 'http://102.223.7.34:8281';

export const environment = {
  production: true,
  appTitle: 'Mamlaka ya usafiri na usalama barabarani',
  logoTitle: 'ZODLAP',
  baseUrl: `${baseUrl}/api`,
  whitelistedDomains: [baseUrl, '102.223.7.34', '102.223.7.34:8281'],
  blacklistedRoutes: [`${baseUrl}/api/signin`],
};
