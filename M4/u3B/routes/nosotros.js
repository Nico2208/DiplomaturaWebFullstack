//Manejador de ruta montable y modular

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('nosotros'); //Render se encontraria en la parte de views como un archivo hbs
});

module.exports = router;