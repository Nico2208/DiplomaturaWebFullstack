var express = require('express');
var router = express.Router();
var usuariosModel = require('./../../models/usuariosModel');

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
      res.redirect('/admin/novedades');
      req.session.id_usuario = data.id; //columna id
      req.session.nombre = data.usuario;
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