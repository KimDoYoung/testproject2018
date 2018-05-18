const express = require('express');
// var movieAction = require('../lib/movies');
const mongoose  = require('mongoose');
const Movie = require('../models/movie');

const router = express.Router();

router.get('/', function(req, res, next){
  let key = req.query.key ;
  console.log('api params :', JSON.stringify(req.params));
  console.log('api params :', req.params.key);
  let pageNum = req.query.pageNum ? parseInt(req.query.pageNum, 10) : 1;
  let pageSize = req.query.pageSize ? parseInt(req.query.pageSize, 10) : 10;
  let startIndex = (pageNum - 1) * pageSize;

  let condition = {};
  // key = '우주';
  if(key){
    condition = {title1 : new RegExp('.*' + key +'.*',"i")};
  }
  Movie.find(condition).lean().skip(startIndex).limit(pageSize).exec(function(err, movies){
    //console.log(movies);
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