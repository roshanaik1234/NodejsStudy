// const express = require('express');
// const app = express();
// const port = 3000;


import express from 'express';
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>');
  console.log("Hello World!");
});

app.get('/about', (req, res) => {
  res.send('<h1>About Page</h1>');
});

app.get('/contact', (req, res) => {
  res.send('<h1>Contact Page</h1>');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});