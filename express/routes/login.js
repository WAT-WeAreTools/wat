var express = require('express');
var router = express.Router();
var knex = require('../../db/knex')

/* GET home page. */

router.get('/login', function(req, res){
  res.render('login', { user: req.user });
});

module.exports = router;
