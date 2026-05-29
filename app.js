// console.log('Hello World');
// console.log('Welcome to Node.js');

// var fs = require("fs");
// fs.writeFileSync("anil.txt", "My name is Roshan");
// let filetext=fs.readFileSync("anil.txt", "utf-8");
// console.log("filetext",filetext);


const fs = require("fs");
const os = require("os"); // import os module

fs.writeFileSync("dummy.txt", "trying with modules"); 
// Create a file with name and write content in it

console.log(os.platform()); // Print the platform of the OS
console.log(os.hostname()); // Print the hostname of the OS
console.log(os.cpus()); // Print the CPU information of the OS