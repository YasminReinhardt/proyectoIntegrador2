var express = require('express');
var router = express.Router();
const productosControl= require ('../controllers/productos.controllers')
// creando las rutas con los controllers (explicaron en clase)

router.get ('/productos', productosControl.index)
