const path = require('path');
const less = require('less');
const tester = require('less/test/less-test')();
const plugin = require(path.join(__dirname, '..', 'dist', 'plugin'));

const options = { strictMath: true, silent: true, plugins: [plugin] };

tester.runTestSet(options, 'functions/');
tester.runTestSet(options, 'disabled/');

if (tester.finish) {
    test.finish();
}
