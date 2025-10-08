const path = require('path');
const  express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
 res.sendFile( path.join(__dirname, '../', 'views', 'shop.html') ); 
//   res.send('<h1>Welcome to the Home Page!</h1>'); 
});

router.get('/about', (req, res) => {
  res.send('<h1>About our company.</h1>');
});

module.exports = router;