exports.seed = function(knex, Promise) {
	return knex.raw('TRUNCATE person, comment, resource, category, resource_type RESTART IDENTITY CASCADE');
};
