const express = require('express');
const  bodyParser = require('body-parser');
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const app = express();

app.use(bodyParser.urlencoded({ extended: true })); // to parse form data 

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

app.use( adminRoutes);
app.use( shopRoutes);
 
//  Start Server
app.listen(3004);
