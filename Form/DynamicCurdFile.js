// const fs = require('fs');
// const path = require('path');

// const action = process.argv[2];
// const fileName = process.argv[3];
// const fileContent = process.argv[4];

// if (!action || !fileName) {
//   console.log('Usage: node DynamicCurdFile.js <action> <fileName> <fileContent?>');
//   console.log('Actions: create, write, read, update, delete');
//   process.exit(1);
// }

// // Write into this repo's Form/text folder (cross-platform)
// const textDir = path.join(__dirname, 'text');
// const filePath = path.join(textDir, fileName + '.txt');

// // Ensure directory exists for create/write/update
// if (!fs.existsSync(textDir)) {
//   fs.mkdirSync(textDir, { recursive: true });
// }

// switch ((action || '').toLowerCase()) {
//   // create: creates empty file
//   case 'create':
//     fs.closeSync(fs.openSync(filePath, 'a'));
//     console.log('File Created');
//     break;

//   case 'write':
//     fs.writeFileSync(filePath, fileContent ?? '', 'utf-8');
//     console.log('File Created');
//     break;

//   case 'read': {
//     const data = fs.readFileSync(filePath, 'utf-8');
//     console.log(data);
//     break;
//   }

//   case 'update':
//     fs.appendFileSync(filePath, '\n' + (fileContent ?? ''), 'utf-8');
//     console.log('File Updated');
//     break;

//   case 'delete':
//     fs.unlinkSync(filePath);
//     console.log('File Deleted');
//     break;
// }



const fs=require('fs');
const action = process.argv[2];
const fileName = process.argv[3];
const fileContent = process.argv[4];

console.log("action",action, "fileName",fileName,"fileContent",fileContent);

switch (action) {
    case "onlycreate":
        fs.createWriteStream("./text/" + fileName + ".txt");
        console.log("File Created");
        break;

    case "create":
        fs.writeFileSync("./text/" + fileName + ".txt", fileContent);
        console.log("File Created");
        break;

    case "read":
        let data = fs.readFileSync("./text/" + fileName + ".txt", "utf-8");
        console.log(data);
        break;  

    case "update":
        fs.appendFileSync("./text/" + fileName + ".txt", "\n" + fileContent);
        console.log("File Updated");
        break;

    case "delete":
        fs.unlinkSync("./text/" + fileName + ".txt");
        console.log("File Deleted");
        break;
    
}

