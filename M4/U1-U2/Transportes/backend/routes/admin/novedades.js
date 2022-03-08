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

router.get('/agregar', (req, res, next) => {
    res.render('admin/agregar', {
        layout: 'admin/layout'
    });
});

router.post('/agregar', async(req, res, next) => {
    try{
        if (req.body.titulo != "" && req.body.subtitulo != "" && req.body.cuerpo != "") {
            await novedadesModel.insertNovedad(req.body);
            res.redirect('/admin/novedades')
        } else {
            res.render('admin/agregar', {
                layout:'admin/layout',
                error: true,
                message: 'Todos los campos son requeridos'
            })
        }
    } catch (error) {
        console.log(error);
        res.render('admin/layout', {
            layout: 'admin/layout',
            error: true, 
            message: 'No se cargo la novedad'
        })
    }
})

module.exports = router;
