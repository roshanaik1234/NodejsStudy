const fs= require('fs');

// create file
// fs.createWriteStream('text/CRUDFile.txt', 'utf-8');
// fs.writeFileSync("text/Roshan.txt", "This is Roshan's file");

// Delete file
// fs.unlinkSync("text/CRUDFile.txt");

// Read file
// let data = fs.readFileSync("text/Roshan.txt", "utf-8");
// console.log(data);

// Update file
// fs.appendFileSync("text/Roshan.txt", "\nThis is appended data");


let data = fs.readFileSync("text/Roshan.txt", "utf-8");
console.log(data);

// Rename file
// fs.renameSync("text/Roshan.txt", "text/RoshanUpdated.txt");


