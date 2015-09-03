var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/json', function(req, res) {
    var db = req.db;
    db('fruits')
        .select('id','name')
        .then(function (row) {
            res.send({success:true, rows: row});
        })
        .catch(function (err) {
            console.log(err);
        });
});

module.exports = router;
