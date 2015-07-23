var express = require('express');

var router = express.Router();

router.get('/', function(req, res) {
  res.render('app/index');
});

router.get('/results', function(req, res) {
  res.render('app/results');
});

router.get('/video', function(req, res) {
  res.render('app/video');
});

module.exports = router;