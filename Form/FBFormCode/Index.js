import express from 'express';
import cors from 'cors';

const app = express();
const port = 3002;

// app.use(cors());
app.use(cors());
app.use(express.json());
 app.use(express.urlencoded({ extended: true }));
 
 let userData = [];
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

// app.post("/submit", (req, res) => {
//     console.log("Form data received:", req.body);
//     res.send({
//         message: "Form data received successfully",
//         data: req.body,
//         flag: true
//     });
// });

app.post('/submit', (req, res) => {
  console.log('Form data received:', req.body);

  let userObject = {
    id: userData.length + 1,
    name: req.body.name,
    email: req.body.email,
    message: req.body.message
  };

    userData.push(userObject);

  res.status(200).json({
    success: true,
    data: userData
  });
});

app.put('/update/:id', (req, res) => {

    const userId = parseInt(req.params.id);

    const userIndex = userData.findIndex(
        user => user.id === userId
    );

    if (userIndex !== -1) {

        userData[userIndex] = {
            ...userData[userIndex],
            name: req.body.name,
            email: req.body.email,
            message: req.body.message
        };

        return res.status(200).json({
            success: true,
            data: userData
        });
    }

    return res.status(404).json({
        success: false,
        message: 'User not found'
    });
});

app.get('/users', (req, res) => {
    res.status(200).json({
        success: true,
        data: userData
    });
});

app.delete('/delete/:id', (req, res) => {
    const userId = parseInt(req.params.id); 
    const userIndex = userData.findIndex(user => user.id === userId);

    if (userIndex !== -1) {
        userData.splice(userIndex, 1);
        return res.status(200).json({
            success: true,
            data: userData
        });
    }

    return res.status(404).json({
        success: false,
        message: 'User not found'
    });
}
);