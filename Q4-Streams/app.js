//Q4 - Using Streams to copy content of a file

const fs = require('fs');

// source and destination files
const fileName = __dirname + '/test.txt';
const outFileName = __dirname + '/test-copy.txt';

// read stream for the source file and write stream for the destination file
const readStream = fs.createReadStream(fileName);
const writeStream = fs.createWriteStream(outFileName);

// piping (ie: re-directing) the read stream to the write stream
readStream.pipe(writeStream);

// listen to the 'data' event of the read stream and print output
readStream.on('data', data => {
    console.log(data.toString());   // NodeJS is awesome
});