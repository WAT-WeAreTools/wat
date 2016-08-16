var express = require('express');
var router = express.Router();
var knex = require('../../db/knex');
var GitHubStrategy = require('passport-github2').Strategy;
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

require('dotenv').load();
var GITHUB_CLIENT_ID = process.env.GITHUB_CLIENT_ID;
var GITHUB_CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET;

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});

var Users = function() {
  return knex('person');
}

//Passport-Strategy
passport.use(new GitHubStrategy({
    clientID: GITHUB_CLIENT_ID,
    clientSecret: GITHUB_CLIENT_SECRET,
    callbackURL: process.env.HOST + "/auth/github/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    process.nextTick(function () {
      done(null, {
        githubId: profile.id,
        token: accessToken
      })
    });

}));

router.get('/github',
  passport.authenticate('github', { scope: [ 'user:email' ] }),
  function(req, res){
      // The request will be redirected to GitHub for authentication, so this
      // function will not be called.
  });

router.get('/github/callback',
  passport.authenticate('github', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/'); //path to front end
  });

module.exports = router;
