var express = require('express');
const axios = require('axios');

var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/customers', async function (req, res, next) {

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

//API NO RELACIONAL
router.get('/orders/:customerNumber', async function (req, res, next) {

  const URL = 'https://api-sales-e096a-default-rtdb.firebaseio.com/collection.json?orderBy=%22customerNumber%22&equalTo=' + req.params.customerNumber

  axios
    .get(URL)
    .then((response) => {

      let array = Object.values(response.data)
      array = array.filter(order => order["status"] == "Shipped")

      res.render('orders', { title: 'Orders', orders: array });

    })
    .catch((err) => {
      res.status(404).send(err);
    });

});

router.get('/products', async function (req, res, next) {

  const URL = 'https://api-sales-e096a-default-rtdb.firebaseio.com/collection.json'

  axios
    .get(URL)
    .then((response) => {

      let array = Object.values(response.data)
      let hash = {}
      array = array.filter(p => hash[p.productCode] ? false : hash[p.productCode] = true);

      res.render('products', { title: 'Products', products: array });

    })
    .catch((err) => {
      res.status(404).send(err);
    });

});

/*router.post('/products', async function (req, res, next) {

  const URL = 'https://api-sales-e096a-default-rtdb.firebaseio.com/collection.json'

  axios
    .get(URL)
    .then((response) => {

      let array = Object.values(response.data)
      let hash = {}
      array = array.filter(p => hash[p.productCode] ? false : hash[p.productCode] = true);

      res.render('products', { title: 'Products', products: array });

    })
    .catch((err) => {
      res.status(404).send(err);
    });

});*/

module.exports = router;
