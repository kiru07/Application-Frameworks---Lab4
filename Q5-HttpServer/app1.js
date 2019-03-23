//Q5 - Using Node's core module 'http' to create a web server

const http = require('http');

// creating a http server which listens to port 3000. It returns html content for GET requests
http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.write('<h1>Hello World</h1>');
    res.end();
}).listen(3000);

