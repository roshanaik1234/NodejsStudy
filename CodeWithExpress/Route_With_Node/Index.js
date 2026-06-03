import express from 'express';
import Home from './Home.js';
import Login from './Login.js';
import Dashboard from './Dashboard.js';

const app = express();
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});


// added this code to parse req.body read data from form and send to dashboard,otherwise req.body undefined 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.get('/', (req, res) => {
//     res.send(Home());
// }   );

app.get("/", (req, resp) => {
  resp.send(Home());
});

app.get("/login", (req, resp) => {
  resp.send(Login());
});

app.post("/submit", (req, resp) => {
  // req.body = '';
  // req.on('data', (chunk) => {
  //   req.body += chunk;
  // });
  // req.on('end', () => {
  //   console.log("req.body",req.body);
  //   resp.send(Dashboard(req.body));
  // })
 console.log("req.body", req.body);
 resp.end(Dashboard(req.body));
  // resp.send(Dashboard());
});