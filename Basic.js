const http = require("http");

const server = http.createServer((req, res) => {
    // console.log("Request received",req);
    console.log("Request URL",req.url);
    console.log("Request Method",req.method);
    res.write("Server Running");
    res.end();
});

server.listen(4000, () => {
    console.log("Server started on port 4000");
});