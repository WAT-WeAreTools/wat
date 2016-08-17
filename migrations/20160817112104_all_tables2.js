exports.up = function(knex, Promise) {
	return Promise.all([
		knex.schema.createTable('resource', function(table) {
			table.increments();
			table.integer('category_id').references('category.id').onDelete('CASCADE');
			table.integer('type_id').references('resource_type.id').onDelete('CASCADE');
			table.integer('person_id').references('person.id').onDelete('CASCADE');
			table.string('title');
      table.text('image_url');
			table.string('url');
			table.integer('votes');
			table.string('description');
			table.boolean('is_free');
		}),
		knex.schema.createTable('comment', function(table) {
			table.increments();
			table.integer('person_id').references('person.id').onDelete('CASCADE');
			table.integer('resource_id').references('resource.id').onDelete('CASCADE');
			table.string('content');
			table.timestamp('created_at').defaultTo(knex.fn.now());
		}),
		knex.schema.createTable('person', function(table) {
			table.increments();
			table.string('username');
		}),
		knex.schema.createTable('category', function(table) {
			table.increments();
			table.string('name');
		}),
		knex.schema.createTable('resource_type', function(table) {
			table.increments();
			table.string('name');
		})
	]);
};

exports.down = function(knex, Promise) {
	return Promise.all([
		knex.raw('DROP TABLE resource CASCADE'),
		knex.raw('DROP TABLE comment CASCADE'),
		knex.raw('DROP TABLE person CASCADE'),
		knex.raw('DROP TABLE category CASCADE'),
		knex.raw('DROP TABLE resource_type CASCADE')
	]);
};


// knex.schema.dropTableIfExists('resource'),
// knex.schema.dropTableIfExists('comment'),
// knex.schema.dropTableIfExists('person'),
// knex.schema.dropTableIfExists('category'),
// knex.schema.dropTableIfExists('resource_type')
