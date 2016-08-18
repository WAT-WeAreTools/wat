var express = require('express');
var router = express.Router();
var knex = require('../db/knex');
var db = require('../db/api');

/* GET all resources. */
router.get('/', function(req, res, next) {
  db.getAllResources()
		.then(function(resources) {
			res.json({
				resources: resources
			});
		});
});

/* GET resource by id. */
router.get('/:id', function(req, res, next) {
  db.getResourceById(req.params.id)
  .then(function (resource) {
    res.json({
      resource: resource
    });
  });
});

module.exports = router;
