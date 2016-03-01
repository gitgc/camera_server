var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'PiCam Viewer' });
});

router.get('/views/:view', function(req, res, next) {
  res.render(req.params.view);
});

module.exports = router;
