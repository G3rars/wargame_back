let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('ruta 1')
});

module.exports = router;
