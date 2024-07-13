// promises in js
const fs = require('fs');

function ReadThenReturnPromise(){
    return new Promise(function(resolve, reject){
        fs.readFile('week-1/offline-class-1/callbacks/try.txt', 'utf-8', function(err, data){
            if(err){
                reject(err);
            }else{
                resolve(data);
            }
        });
    });
}

function onDone(data){
    console.log(data);
}

ReadThenReturnPromise().then(onDone);
console.log('I am the last line of the code');



// does the same work what a callback does
// its just a syntactical sugar with a better error handling