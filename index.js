'use strict';
var fs = require('fs');

fs.readdir('./', function(err, files) {
    fs.writeFile('./content.txt', files, function(err) {
        console.log('Saved to ./content.txt!');
    });
});