var express = require('express');
var movieAction = require('../lib/movies');
var router = express.Router();

router.get('/', function(req, res, next){
  var list = movieAction.list();
  console.log('ROUTER:', list);
  res.send(list);

//   res.end();
});

router.get('/:id', function(req, res, next){
  res.end();
});

module.exports = router;