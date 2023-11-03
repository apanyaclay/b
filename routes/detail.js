const fetch = require('node-fetch');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/:id/:title', function(req, res, next) {
  const url = 'https://api.themoviedb.org/3/movie/'+req.params.id;
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNDYxYzY5MDllMGJlNGFjZTFlNTNmYjA5YWYzNjZmNSIsInN1YiI6IjVmY2RkMDkyZTMyOTQzMDAzZjQwMTBjYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.U-k5bxq-jg_DiiLNIC_jRBDsjjd5Cu5TXLISSfHB8Ao'
    }
  };
  
  fetch(url, options)
    .then(res => res.json())
    .then(json => {
      res.render('detail', { title: 'Movie', data: json })})
    .catch(err => console.error('error:' + err));
});

module.exports = router;

