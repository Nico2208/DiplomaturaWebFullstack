var express = require('express');
var router = express.Router();
var usuariosModel = require('./../../models/usuariosModel');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('admin/login', {
      layout: 'admin/layout' //Indicamos como layout un layout distinto al principal
  });
});

router.post('/', async (req, res, next) => { //Controlador necesario
  //para capturar los datos enviados por el formulario de login.hbs
  try {
    var usuario = req.body.usuario;
    var password = req.body.password;

    var data = await usuariosModel.getUserByUsernameAndPassword(usuario, password);

    if (data != undefined) {
      req.session.id_usuario = data.id; //columna id
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

router.get('/logout', function(req, res, next){
  req.session.destroy();
  res.render('admin/login', {
    layout: 'admin/layout'
  });
})

module.exports = router;