import express from "express";
import path from "path";

const app = express();
const port = 3000;

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

app.get("/", (req, res) => {
    res.sendFile("index.html", { root: "./" });
});

app.get("/404", (req, res) => {
  const anspath=path.resolve("./404.html");
  res.sendFile(anspath);
//   res.status(404).sendFile(anspath);
});

app.get("/userDetail", (req, res) => {
    const userDetails = {
        name: "John Doe",
        email:"ram@gamil.com",
        password:"123456"
    };
    res.json(userDetails);
});