const http = require('http');
const fs = require('fs');
const querystring = require('querystring');

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

            // Convert Buffer Array → String
            let rawData = Buffer.concat(dataBody).toString();

            console.log("Raw Data:", rawData);

            // Convert String → Object
            let readableData = querystring.parse(rawData);

            console.log("Readable Data:", readableData);

            // Create File Content
            let dataString =
                "My name is " +
                readableData.name +
                " and my email is " +
                readableData.email;

            // Create txt file
            fs.writeFileSync(
                "text/" + readableData.name + ".txt",
                dataString
            );

            console.log("File Created");

            resp.writeHead(200, { 'Content-Type': 'text/html' });

            resp.end(`<h1>Data Submitted</h1>`);
        });
    }

}).listen(3200, () => {
    console.log("Server running on port 3200");
});