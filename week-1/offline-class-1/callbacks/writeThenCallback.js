const fs = require('fs').promises;

function autoReads() {
    return new Promise((resolve, reject) => {
        const filePath = 'week-1/offline-class-1/callbacks/try.txt';
        fs.readFile(filePath, 'utf8')
            .then(data => resolve({ filePath, data }))
            .catch(err => reject(err));
    });
}

function writeFile(filePath, content) {
    const disclaimer = "\n\n/* Disclaimer: This is a copyrighted material. All rights reserved. */\n";
    const updatedContent = content + disclaimer;
    return fs.writeFile(filePath, updatedContent);
}

function printFile({ filePath, data }) {
    return fs.readFile(filePath, 'utf8')
        .then(updatedData => {
            console.log(updatedData);
            return { filePath, data: updatedData };
        })
        .catch(err => {
            console.error(err);
            throw err; // Re-throw the error to propagate it to the next catch block
        });
}

autoReads()
    .then(({ filePath, data }) => 
        writeFile(filePath, data).then(() => ({ filePath, data }))
    )
    .then(printFile)
    .catch((err) => console.error(err));
