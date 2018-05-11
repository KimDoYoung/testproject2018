var express = require('express');
var router = express.Router();
var movies = require('../data/movies.json');
const mongoose = require('mongoose');
 

router.get('/', function(req, res, next){
    mongoose.connect('mongodb://localhost/my_database');
    console.log('connect to mongodb')
    res.send(movies);
});

router.get('/:id', function(req, res, next){
    var id = parseInt(req.params.id, 10);
    var movie = movies.filter(function(movie){
        return movie.id == id;
    });
    res.send(movie);
});

module.exports = router;