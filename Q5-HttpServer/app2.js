//Q5-d: An http server which accepts POST requests

const http = require('http');

http.createServer((req,res) => {
    res.setHeader('Content-type', 'text/html');

    switch(req.method) {
        case 'GET':
            res.write('<h1>Hello World</h1>');
            res.end();
            break;
        case 'POST':
            req.on('data', data => {
                res.write('<h1>Hello ' + data + '</h1>');
                res.end();
            });
            break;
    }
}).listen(3000, err => {
    console.log('Server is listening to port 3000');
});

// To test the POST request, use Postman or RESTClient extension (for firefox)
// RESTClient extension: Select 'POST' method
//                       Enter the data in the 'Body' section