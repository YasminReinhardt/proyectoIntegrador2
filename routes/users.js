var express = require('express');
var router = express.Router();
const userControl= require ('../controllers/users.controllers')
// creando las rutas con los controllers (explicaron en clase)

router.get ('/user', userControl)

module.exports = router;
