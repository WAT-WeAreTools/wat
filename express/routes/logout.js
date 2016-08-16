var express = require('express');
var router = express.Router();
var knex = require('../../db/knex')

/* GET home page. */

router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});

module.exports = router;
