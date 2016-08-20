# perl-exiftool
A distribution of exiftool. Current version is 10.25.

## Usage
The module exports a path to the exiftool executable (either `exe` on Windows
or `perl` on all other platforms).

```js
const exec = require('child_process').execFile;
const exiftool = require('perl-exiftool');

execFile(exiftool, ['-j', 'image.jpg'], (error, stdout, stderr) => {
	if (error) {
		console.error(`exec error: ${error}`);
		return;
	}
	console.log(`stdout: ${stdout}`);
	console.log(`stderr: ${stderr}`);
});
```

## Links
[exiftool](http://www.sno.phy.queensu.ca/~phil/exiftool/)

[sourceforge](https://sourceforge.net/projects/exiftool/)

[cpan](http://search.cpan.org/~exiftool/)

## License
Artistic License 2.0
