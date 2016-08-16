var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json( { title: 'Express' } );
});

module.exports = router;


// app.get('/', function(req, res){
//   res.render('index', { user: req.user });
// });
