var express = require('express');
var router = express.Router();

/*GET seccion page */
router.get('/', function(req, res, next) {
  res.render('seccion');
});

module.exports = router;