const exiftool = require('../index');
const assert = require('assert');
const execFile = require('child_process').execFile;

describe('exiftool', function () {
	it('should export a path to current executable', function () {
		assert.equal(typeof exiftool, 'string');
		assert(/exiftool/.test(exiftool));
	});
	it('should be able to run the executable', function (done) {
		execFile(exiftool, ['-echo', 'test-out', '-echo2', 'test-err'], (error, stdout, stderr) => {
			if (error) {
				done(error);
				return;
			}
			assert.equal(stdout.trim(), 'test-out');
			assert.equal(stderr.trim(), 'test-err');
			done();
		})
	});
});
