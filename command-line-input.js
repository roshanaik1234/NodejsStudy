// const arg = process.argv;

// console.log("command-line-input.js -------", arg);

const http = require("http");
const arg = process.argv;
const port = arg[2];

http
  .createServer((req, resp) => {
    resp.write("test input from cmd");
    resp.end();
  })
  .listen(port);