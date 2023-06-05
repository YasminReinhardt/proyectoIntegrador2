var express = require('express');
var router = express.Router();
const userControl= require ('../controllers/users.controllers')
// creando las rutas con los controllers (explicaron en clase)

router.get ('/login', userControl.login)
//router.post('/login',userControl.checkUser)

router.post('/register', userControl.create)
router.get ('/register', userControl.register)

router.get ('/profile', userControl.profile)
router.post('/profile/:id', userControl.update)
router.post ('/delete/:id',userControl.delete)

router.get ('/edit-profile', userControl.edit)
router.post ('/edit-profle/:id',  userControl.update)



module.exports = router;
