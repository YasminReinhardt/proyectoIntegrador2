var express = require('express');
var router = express.Router();
const index= require ('../controllers/indexControllers')

// creando las rutas con los controllers (explicaron en clase)
router.get('/', index.index)
router.post('/',index.logout)


module.exports = router;
