// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  adalConfig: {
    tenant: 'uayilliathiaea.onmicrosoft.com',
    clientId: '2849bdf1-c292-4c65-aef6-ab385e7f5c0d',
    postLogoutRedirectUri: 'http://localhost:4201/logout'
  }
};
