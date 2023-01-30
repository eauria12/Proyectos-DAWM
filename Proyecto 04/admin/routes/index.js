var express = require('express');
const axios = require('axios');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/customers', async function(req, res, next) {
  
  const URL = 'http://localhost:4444/customers/findAll/json'
  const config = {
    proxy: {
      host: 'localhost',
      port: 4444
    }
  }
  const response = await axios.get(URL, config)
  res.render('customers', { title: 'Customers', customers: response.data });

});



module.exports = router;
