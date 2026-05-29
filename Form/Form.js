// const http = require('http');
// const fs = require('fs');

// http.createServer((req, resp) => {
//   fs.readFile('Form.html', 'utf-8', (error, data) => {
//     if (error) {
//       resp.writeHead(500, { "content-type": 'text/plain' });
//       resp.end('internal server error');
//       return;
//     }

//     resp.writeHead(200, { "content-type": 'text/html' });

//     if (req.url == '/') {
//       resp.write(data);
//       console.log("data", data);
//     } else if (req.url == '/submit') {
//       resp.write('<h1>Data submitted</h1>');
//     }

//     resp.end();
//   });
// }).listen(3200);


const http = require('http');
const fs = require('fs');

http.createServer((req, resp) => {

    // Home Page
    if (req.url === '/' && req.method === 'GET') {

        fs.readFile('Form.html', 'utf-8', (error, data) => {

            if (error) {
                resp.writeHead(500, { 'Content-Type': 'text/plain' });
                resp.end('Internal Server Error');
                return;
            }

            resp.writeHead(200, { 'Content-Type': 'text/html' });
            resp.end(data);
        });
    }

    // Form Submit
    else if (req.url === '/submit' && req.method === 'POST') {

        let dataBody = [];

        req.on('data', (chunk) => {
            dataBody.push(chunk);
        });

        req.on('end', () => {
              console.log("dataBody", dataBody.toString());
            let rawData = Buffer.concat(dataBody).toString();

            console.log("Form Data:", rawData);

            resp.writeHead(200, { 'Content-Type': 'text/html' });

            resp.end(`<h1>Data Submitted</h1>`);
        });
    }

}).listen(3200, () => {
    console.log("Server running on port 3200");
});