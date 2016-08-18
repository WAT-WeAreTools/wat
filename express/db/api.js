var knex = require('./knex');

module.exports = {

	getAllResources: function() {
		return knex('resource').select();
	},

	getResourceById: function(id) {
		return knex('resource').where({
			id: id
		}).first();
	},

	getAllCategories: function() {
		return knex('category').select();
	},

	getCategoryById: function(id) {
		return knex('category').where({
			id: id
		}).first();
	},

	getCategoryIdByCategoryName: function(name) {
		return knex('category').where({
			name: name
		}).first();
	},

	// getResourcesByCategory: function(category) {
	// 	return knex('resource').where({
	// 		category: category
	// 	});
	// },

};
