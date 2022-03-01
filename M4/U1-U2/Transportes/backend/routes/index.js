var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect('admin/login'); //Lleva directamente a la pagina de admin/login
});

module.exports = router;
