var express = require('express');
var router = express.Router();
const userControl= require ('../controllers/users.controllers')
// creando las rutas con los controllers (explicaron en clase)

router.get ('/login', userControl.login)
router.get ('/register', userControl.register)
router.get ('/profile', userControl.profile)
router.get ('/edit-profile', userControl.edit)



module.exports = router;
