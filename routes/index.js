var express = require('express');
var router = express.Router();
const index= require ('../controllers/index.controllers')

// creando las rutas con los controllers 
router.get ('/', index.index)
router.get ('/login', index.login)
router.get ('/register',index.register)
router.get ()//falta uno


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get ('/')
module.exports = router;
