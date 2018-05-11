'use strict'

var mongoose  = require('mongoose');
var Movie = require('../models/movie');
function getQuery(name){
    var condition = name ? {title1:name} : {};
    var query = Movie.find(condition);
    return query;
}
function getPromise(name){
    var condition = name ? {title1:name} : {};
    var promise = Movie.find(condition).exec();
    return promise;
}
function getStream(name){
    var condition = name ? {title1:name} : {};
    var stream = Movie.find(condition).stream();
    return stream;
}
module.exports.list = function(){
    console.log('lib/movies list.....');
    // var  query = getQuery("우주의 침입자");
    // var list = [];
    // query.exec(function(err, movies){
    //     if(err){
    //         console.error(err);
    //         return [];
    //     } 
    //     console.log(movies.length);
    //     movies.forEach(function(movie){
    //         console.log(movie);
    //         list.push(movie);
    //     });
    // });
    // return list;
    var promise = getPromise('우주의 침입자');
    promise.then(function(movies){
        return movies;
    }).error(function(error){
        console.error(error);
        return [];
    });

}
module.exports.get = function(id){
    console.log('lib/movies get....');
}