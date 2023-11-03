const fetch = require('node-fetch');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const url = 'https://api.themoviedb.org/3/movie/popular';
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
      const newData = [];
      json.results.forEach(result => {
        const { id, title, overview, popularity, original_language, poster_path, release_date } = result;
        const filmData = {
          id,
          title,
          overview,
          popularity,
          original_language,
          poster_path,
          release_date
      };
  
      // Tambahkan objek film ke variabel newData
      newData.push(filmData);
      });
      res.render('index', { title: 'Movie', newData: newData })})
    .catch(err => console.error('error:' + err));
});

module.exports = router;

