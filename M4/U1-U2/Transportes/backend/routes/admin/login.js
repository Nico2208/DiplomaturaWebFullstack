var express = require('express');
var usuariosModel = require('./../../models/usuariosModel');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('admin/login', {
      layout: 'admin/layout' //Indicamos como layout un layout distinto al principal
  });
});

router.post('/', async (req, res, next) => {
  try {
    var usuario = req.body.usuario;
    var password = req.body.password;

    var data = await usuariosModel.getUserByUsernameAndPassword(usuario, password);

    if (data != undefined) {
      req.session.id_usuario = data.id;
      req.session.nombre = data.usuario;
      res.redirect('/admin/novedades');
    } else {
      res.render('admin/login', {
        layout: 'admin/layout', 
        error: true
      });
    }
  } catch {
    console.log(error);
  }
})

module.exports = router;