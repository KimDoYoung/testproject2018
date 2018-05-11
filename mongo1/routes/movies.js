var express = require('express');
// var movieAction = require('../lib/movies');
var mongoose  = require('mongoose');
var Movie = require('../models/movie');

var router = express.Router();

router.get('/', function(req, res, next){
  // var list = movieAction.list();
  //console.log('ROUTER:', list);
  console.log(req.query.pageNum);
  let pageNum = req.query.pageNum ? parseInt(req.query.pageNum, 10) : 1;
  let pageSize = req.query.pageSize ? parseInt(req.query.pageSize, 10) : 10;
  let startIndex = (pageNum - 1) * pageSize;

  console.log('startIndex:', startIndex, pageSize);
  Movie.find().lean().skip(startIndex).limit(pageSize).exec(function(err, movies){
    console.log(movies);
    res.writeHead(200, {'Content-Type': 'text/json; charset=utf-8'});
    return res.end(JSON.stringify(movies));
  });
  //res.send(list);

//   res.end();
});

router.get('/:id', function(req, res, next){
  res.end();
});

module.exports = router;