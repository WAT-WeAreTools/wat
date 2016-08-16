var express = require('express');
var router = express.Router();
var knex = require('../../db/knex')

/* GET home page. */

router.get('/account', ensureAuthenticated, function(req, res){
  res.render('account', { user: req.user });
});

function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) { return next(); }
  res.redirect('/login')   // make sure this redirects to our login page
}

module.exports = router;
