var fs = require ('fs');
var path = require ('path');

fs.writeFile(path.join(path.dirname(__filename), 'message.txt'), 'Hello Tsurayya', function (err) {
  if (err) throw err;
  console.log('It\'s saved!');
});

fs.rename('serial.txt', 'serial-dua.txt', function (error) {
  fs.readFile(path.join(path.dirname(__filename), 'serial-dua.txt'), 'utf8', function (error, contents) {
    console.log(contents);
    });
});

fs.readFile(path.join(path.dirname(__filename), 'simple.txt'), 'utf8', function (error, contents) {
  console.log(contents);
});

fs.readFile(path.join(path.dirname(__filename), 'message.txt'), 'utf8', function (error, contents) {
  console.log(contents);
});

