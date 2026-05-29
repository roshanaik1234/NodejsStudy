const fs = require('fs');
const path = require('path');

const action = process.argv[2];
const fileName = process.argv[3];
const fileContent = process.argv[4];

if (!action || !fileName) {
  console.log('Usage: node DynamicCurdFile.js <action> <fileName> <fileContent?>');
  console.log('Actions: create, write, read, update, delete');
  process.exit(1);
}

// Write into this repo's Form/text folder (cross-platform)
const textDir = path.join(__dirname, 'text');
const filePath = path.join(textDir, fileName + '.txt');

// Ensure directory exists for create/write/update
if (!fs.existsSync(textDir)) {
  fs.mkdirSync(textDir, { recursive: true });
}

switch ((action || '').toLowerCase()) {
  // create: creates empty file
  case 'create':
    fs.closeSync(fs.openSync(filePath, 'a'));
    console.log('File Created');
    break;

  case 'write':
    fs.writeFileSync(filePath, fileContent ?? '', 'utf-8');
    console.log('File Created');
    break;

  case 'read': {
    const data = fs.readFileSync(filePath, 'utf-8');
    console.log(data);
    break;
  }

  case 'update':
    fs.appendFileSync(filePath, '\n' + (fileContent ?? ''), 'utf-8');
    console.log('File Updated');
    break;

  case 'delete':
    fs.unlinkSync(filePath);
    console.log('File Deleted');
    break;
}

