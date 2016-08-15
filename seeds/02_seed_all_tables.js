exports.seed = function(knex, Promise) {
	return Promise.all([
			// Inserts seed entries
			knex('person').insert({
				username: 'Wat'
			}),
		])
		.then(function() {
			return knex('person').select();
		})
		.then(function(people) {
			return Promise.all([
					knex('category').insert({
						name: 'JavaScript'
					})
				])
				.then(function() {
					return Promise.all([
						knex('person').select(),
						knex('category').select()
					]);
				});
		})
		.then(function(data) {
			return Promise.all([
					knex('resource_type').insert({
						name: 'eBook'
					})
				])
				.then(function(data) {
					return Promise.all([
						knex('person').select(),
						knex('category').select(),
						knex('resource_type').select()
					]);
				});
		})
		.then(function(data) {
			return Promise.all([
					knex('resource').insert({
						category_id: findCategory('JavaScript', data[1]),
						type_id: findType('eBook', data[2]),
						person_id: findPerson('Wat', data[0]),
						title: 'Eloquent JavaScript',
						url: 'http://eloquentjavascript.net',
						votes: 3,
						description: 'This is a book about JavaScript, programming, and the wonders of the digital.',
						is_free: true
					})
				])
				.then(function(data) {
					return Promise.all([
						knex('person').select(),
						knex('category').select(),
						knex('resource_type').select(),
						knex('resource').select()
					]);
				})
				.then(function(data) {
					return Promise.all([
						knex('comment').insert({
							person_id: findPerson('Wat', data[0]),
							resource_id: findResource('Eloquent JavaScript', data[3]),
							content: 'Great book for learning JavaScript!',
							created_at: '2016-08-15'
						})
					]);
				});
		});

	function findPerson(username, list) {
		for (var i = 0; i < list.length; i++) {
			if (username === list[i].username) {
				return list[i].id;
			}
		}
	}

	function findCategory(name, list) {
		for (var i = 0; i < list.length; i++) {
			if (name === list[i].name) {
				return list[i].id;
			}
		}
	}

  function findType(name, list) {
		for (var i = 0; i < list.length; i++) {
			if (name === list[i].name) {
				return list[i].id;
			}
		}
	}

  function findResource(title, list) {
		for (var i = 0; i < list.length; i++) {
			if (title === list[i].title) {
				return list[i].id;
			}
		}
	}
};
