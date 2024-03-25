const fs = require('fs');

function ReadThenReturn(cb){
    fs.readFile('week-1/offline-class-1/callbacks/try.txt', 'utf8', function(err, data){
        if(err){
            console.log(err);
        }else{
            cb(data);
        }
    });
}

function onDone(data){
    console.log(data);
}

ReadThenReturn(onDone);
console.log('I am the last line of the code');


