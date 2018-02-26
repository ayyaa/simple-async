var fs = require ('fs');

fs.rename('serial.txt', 'serial-dua.txt', function (error) {
});

fs.readFile('serial-dua.txt','utf8', function (error, contents) {
	console.log(contents);
});

fs.writeFile('message.txt', 'Hello Tsurayya', function (err) {
  if (err) throw err;
  console.log('It\'s saved!');
});

fs.readFile('message.txt','utf8', function (error, contents) {
	console.log(contents);
});

fs.readFile('simple.txt','utf8', function (error, contents) {
	console.log(contents);
});
