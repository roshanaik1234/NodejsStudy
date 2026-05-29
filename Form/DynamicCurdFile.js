const fs=require('fs');
const action = process.argv[2];
const fileName = process.argv[3];
const fileContent = process.argv[4];

switch (action) {
    // Note: create and write are create file operations, but in write we can write content in the file.
    case "create":
        fs.createWriteStream("/text/" + fileName + ".txt", "utf-8");
        console.log("File Created");
        break;
    
    case "Write":
        fs.writeFileSync("/text/" + fileName + ".txt", fileContent);
        console.log("File Created");
        break;

    case "read":
        let data = fs.readFileSync("/text/" + fileName + ".txt", "utf-8");
        console.log(data);
        break;  

    case "update":
        fs.appendFileSync("/text/" + fileName + ".txt", "\n" + fileContent);
        console.log("File Updated");
        break;

    case "delete":
        fs.unlinkSync("/text/" + fileName + ".txt");
        console.log("File Deleted");
        break;
    
}



