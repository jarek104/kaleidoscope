// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const { SpecReporter } = require('jasmine-spec-reporter');

exports.config = {
  allScriptsTimeout: 11000,
  specs: [
    './e2e/**/*.e2e-spec.ts'
  ],
  capabilities: {
    // 'browserName' : 'chrome',

    'browserName' : 'Chrome',
    'browser_version' : '66.0',
    'os' : 'Windows',
    'os_version' : '10',
    'resolution' : '1920x1080',
    'browserstack.user' : 'jerryolewniczak1',
    'browserstack.key' : 'dAxzCDNq6HkPyuGST1EJ'
  },
  directConnect: false,
  // directConnect: true,
  seleniumAddress: 'http://hub-cloud.browserstack.com/wd/hub',
  baseUrl: 'http://nokurna.com/kaleidoscope/',
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function() {}
  },
  onPrepare() {
    require('ts-node').register({
      project: 'e2e/tsconfig.e2e.json'
    });
    jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
  }
};
