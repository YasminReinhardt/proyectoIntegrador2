var express = require('express');
var router = express.Router();
const index= require ('../controllers/index.controllers')

// creando las rutas con los controllers (explicaron en clase)
router.get ('/', index.index)
router.get ('/login', index.login)
router.get ('/register',index.register)

module.exports = router;
