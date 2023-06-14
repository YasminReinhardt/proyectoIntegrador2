var express = require('express');
var router = express.Router();
const productosControl= require ('../controllers/productos.controllers')
// creando las rutas con los controllers (explicaron en clase)

//router.get("/", productosControl.index)
//router.get("/detail", productosControl.detail)


router.get ('/detail/:id', productosControl.productos)
router.get ('/detail', productosControl.productos)
router.get ('/productosAdd', productosControl.productosAdd )
router.post ('/productosAdd/create', productosControl.create)
router.get ('/searchResults', productosControl.searchResults)

router.post('/product/:id?', productosControl.addComment);


module.exports = router;