var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/hans', function(req, res, next) {
  res.json({hans:"hans"});
  // res.render('index', { title: 'Expreshanss' });
});

module.exports = router;
