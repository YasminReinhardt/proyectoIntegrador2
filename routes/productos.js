var express = require('express');
var router = express.Router();
const productosControl= require ('../controllers/productos.controllers')
// creando las rutas con los controllers (explicaron en clase)

//router.get("/", productosControl.index)
//router.get("/detail", productosControl.detail)


router.get ('/', productosControl.productos)
router.get ('/productosAdd', productosControl.productosAdd )
router.get ('/searchResults', productosControl.searchResults)

module.exports = router;
