// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const { SpecReporter } = require('jasmine-spec-reporter');

exports.config = {
    allScriptsTimeout: 11000,
    specs: [
        './e2e/**/*.e2e-spec.ts'
    ],

    multiCapabilities: [
      {
        browserName: 'MicrosoftEdge',
        platform: 'Windows 10',
        version: '16.16299'
      },
      {
        browserName: 'chrome',
        platform: 'Windows 10',
        version: '67.0'
      },
      {
        browserName: 'firefox',
        platform: 'Windows 10',
        version: '60.0'
      },
      {
        browserName: 'internet explorer',
        platform: 'Windows 10',
        version: '11.103'
      },
      {
        browserName: 'safari',
        platform: 'macOS 10.13',
        version: '11.1'
      }
    ],
    directConnect: false,
    seleniumAddress: '"http://zaphod:38609b2d-e735-4f08-bc6e-f2e61e6a59d6@ondemand.saucelabs.com:80/wd/hub"',
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
