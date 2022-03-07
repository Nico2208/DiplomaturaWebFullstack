var express = require('express');
const async = require('hbs/lib/async');
var novedadesModel = require ('./../../models/novedadesModel'); //importo el modelo de novedades
var router = express.Router();


router.get('/',  async function(req, res, next){
    var novedades = await novedadesModel.getNovedades();
    res.render('admin/novedades', {
        layout: 'admin/layout',
        usuario: req.session.nombre, 
        novedades
    })
})

// router.get('/', async function (req, res, next) {
//     var novedades = await novedadesModel.getNovedades(); //realizo la consulta al pool
//     res.render('admin/novedades', { //renderizo mostrando el nombre almacenado en la sesion y el array de novedades
//         layout: 'admin/layout',
//         usuario: req.session.nombre,
//         novedades //array de novedades
//     }); 
// });

module.exports = router;
