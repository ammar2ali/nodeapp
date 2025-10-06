const express = require('express');
const app = express();

//  Global middleware #1 — Logger
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next(); 
});

//  Global middleware #2 — Fake Authentication
app.use((req, res, next) => {
  const isLoggedIn = true; // simulate login check
  if (!isLoggedIn) {
    return res.status(401).send('Unauthorized user');
  }
  console.log('User authenticated');
  next();
});

app.get('/', (req, res) => {
  res.send('<h1>Welcome to the Home Page!</h1>');
});

app.get('/products', (req, res) => {
  res.send('<h1>Here is the list of products.</h1>');
});


app.get('/about', (req, res) => {
  res.send('<h1>About our company.</h1>');
});

//  Start Server
app.listen(3004);
