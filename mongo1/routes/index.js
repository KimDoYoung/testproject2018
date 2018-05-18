var express = require('express');
var axios = require('axios');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'title1' });
});
router.get('/movie/list', function(req, res, next) {
  let params = { 
      key : req.query.key,
      pageNum : req.query.pageNum,
      pageSize : req.query.pageSize
  };
  console.log('index:' + JSON.stringify(params));
  const list = axios.get('http://localhost:3000/api/movies', {params:params})
  .then(response => {
    res.render('list', { title: '모은 영화 리스트1', list : response.data });
  })
  .catch(e => {
    this.errors.push(e)
  })
});
module.exports = router;
