// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

const packageJson = require('../../../../package.json');

export const environment = {
  appName: "My Digital Library",
  envName: 'DEV',
  production: false,
  test: false,
  i18nPrefix: '',
  firebaseConfig: {
    apiKey: "AIzaSyAJncFGth1KHT3ITCxzPNG8URxjPlfPwL8",
    authDomain: "my-digital-library-e5f9b.firebaseapp.com",
    databaseURL: "https://my-digital-library-e5f9b.firebaseio.com",
    projectId: "my-digital-library-e5f9b",
    storageBucket: "my-digital-library-e5f9b.appspot.com",
    messagingSenderId: "338189990943",
    appId: "1:338189990943:web:1a4e973013f0c64cbe692a"
  },
  versions: {
    app: packageJson.version,
    angular: packageJson.dependencies['@angular/core'],
    ngrx: packageJson.dependencies['@ngrx/store'],
    material: packageJson.dependencies['@angular/material'],
    bootstrap: packageJson.dependencies.bootstrap,
    rxjs: packageJson.dependencies.rxjs,
    ngxtranslate: packageJson.dependencies['@ngx-translate/core'],
    fontAwesome: packageJson.dependencies['@fortawesome/fontawesome-free'],
    angularCli: packageJson.devDependencies['@angular/cli'],
    typescript: packageJson.devDependencies['typescript'],
    cypress: packageJson.devDependencies['cypress']
  }
};
