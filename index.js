'use strict';
var fs = require('fs');

fs.readdir('./', function(err, files) {
    if (err) {
        console.log('Fatal error. Can\'t read dir. Check possible reasons.')
        process.exit();
    };
    fs.writeFile('./content.txt', files, function(err) {
        if (err) {
            console.log('Fatal error. Can\'t write file. Check if file or dir are not read-only')
            process.exit();    
        }
        console.log('Saved to ./content.txt!');
    });
});