const http = require("http");
const fs = require("fs");

http
  .createServer((req, resp) => {
    fs.readFile("app.js", "utf-8", (err, data) => {
      if (err) {
        resp.writeHead(500, {
          "Content-Type": "text/plain",
        });
        resp.write("File not found in this path or branch");
        resp.end();
        return;
      }

      resp.writeHead(200, {
        "Content-Type": "text/html",
      });
      resp.write(data);
      resp.end();
    });
  }).listen(3200);