//Q3 - Using Node's core module 'fs' to read files

const fs = require('fs');

// using system variable __dirname to set file location
const fileName = __dirname + '/test.txt';

// reading the file using readFile() an asynchronous method and printing the content to the console
fs.readFile(fileName, (err, data) => {
    if(err) {
        console.error(err);
    }

    //console.log(data);  //  <Buffer 4e 6f 64 65 4a 53 20 69 73 20 61 77 65 73 6f 6d 65>
    console.log(data.toString());   // NodeJS is awesome

});


// Using readFileSync() to read the file synchronously
const data = fs.readFileSync(fileName);
console.log('sync: ' + data.toString());  // sync: NodeJS is awesome
                                          // NodeJS is awesome  <-- from above async read
