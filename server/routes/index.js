const express = require('express');
const router = express.Router();
const request = require('request');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/find',function(req, res) {
    console.log("inside routes");
    request.get('https://api.themoviedb.org/3/search/movie?api_key=a8654b92df1d2ce3b89bb66a01da07ff&language=en-US&query='+req.query.name+'&page=1&include_adult=false', function(err, response, body) {
        if (!err && response.statusCode == 200) {
             res.json(JSON.parse(response.body));
        }
        else {
            res.send('error occured');
        }
    });
});

module.exports = router;
