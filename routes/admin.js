const path = require('path');
const express = require('express');
const router = express.Router();

router.get('/products', (req, res) => {
     res.sendFile( path.join(__dirname, '../', 'views', 'add-product.html') ); 
    
//   res.send('<form action ="/admin/product" method="POST"><input type="text" name="title"><button type="submit">Add product</form>'); 
});

router.post('/product', (req, res) => {
    console.log('bodyyyy', req.body); 
  res.redirect('/');
});

module.exports = router; 