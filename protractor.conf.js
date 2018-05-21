// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const { SpecReporter } = require('jasmine-spec-reporter');

exports.config = {
  allScriptsTimeout: 11000,
  specs: [
    './e2e/**/*.e2e-spec.ts'
  ],
  commonCapabilities: {
    // 'browserName' : 'chrome',
    'browserstack.user' : 'jerryolewniczak1',
    'browserstack.key' : 'dAxzCDNq6HkPyuGST1EJ'
  },
  multiCapabilities: [
    {
      'browserName': 'Safari',
      'device': 'iPhone 8 Plus',
      'realMobile': 'true',
      'os_version': '11.0'
    },
    {
      'browserName': 'Chrome',
      'device': 'Samsung Galaxy S8',
      'realMobile': 'true',
      'os_version': '7.0'
    },
  ],
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
exports.config.multiCapabilities.forEach(function(caps){
  for(var i in exports.config.commonCapabilities) caps[i] = caps[i] || exports.config.commonCapabilities[i];
});
