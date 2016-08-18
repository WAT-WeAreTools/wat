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
                    knex('category').insert([{
                        name: 'javascript'
                    }, {
                        name: 'node'
                    }, {
                        name: 'general'
                    }, {
                        name: 'html'
                    }, {
                        name: 'database'
                    }, {
                        name: 'css'
                    }])
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
                    knex('resource_type').insert([
											{
                        name: 'ebook'
                    },
										{
											name: 'article'
										},
										{
											name: 'video'
										},
										{
											name: 'podcast'
										},
										{
											name: 'online-course'
										},
										{
											name: 'book'
										},
										{
											name: 'other'
										}
									])
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
                    knex('resource').insert([
											{
                        category_id: findCategory('javascript', data[1]),
                        type_id: findType('ebook', data[2]),
                        person_id: findPerson('Wat', data[0]),
                        title: 'Eloquent JavaScript',
                        image_url: 'http://eloquentjavascript.net/img/cover.png',
                        url: 'http://eloquentjavascript.net',
                        votes: 3,
                        description: 'This is a book about JavaScript, programming, and the wonders of the digital.',
                        is_free: true
                    },
											{
                        category_id: findCategory('css', data[1]),
                        type_id: findType('article', data[2]),
                        person_id: findPerson('Wat', data[0]),
                        title: 'CSS-Tricks: A Guide to Flexbox',
                        image_url: 'http://www.infragistics.com/community/cfs-filesystemfile.ashx/__key/CommunityServer.Blogs.Components.WeblogFiles/brent_5F00_schooley.metablogapi/8765.css_2D00_tricks_5F00_03149516.png',
                        url: 'https://css-tricks.com/snippets/css/a-guide-to-flexbox/',
                        votes: 4,
                        description: 'Everything you ever wanted to know about flexbox',
                        is_free: true
                    },
											{
                        category_id: findCategory('javascript', data[1]),
                        type_id: findType('video', data[2]),
                        person_id: findPerson('Wat', data[0]),
                        title: 'Fun Fun Functions',
                        image_url: 'https://i.ytimg.com/vi/ImwrezYhw4w/hqdefault.jpg?custom=true&w=196&h=110&stc=true&jpg444=true&jpgq=90&sp=68&sigh=zg2utk9bh72hcfyfq06sbqNeuiA',
                        url: 'https://www.youtube.com/channel/UCO1cgjhGzsSYb1rsB4bFe4Q',
                        votes: 9,
                        description: 'The mad scientist of videoland, explaining all things JS. Fun, indeed',
                        is_free: true
                    },
											{
                        category_id: findCategory('javascript', data[1]),
                        type_id: findType('article', data[2]),
                        person_id: findPerson('Wat', data[0]),
                        title: 'Understanding-Scopes in Angular',
                        image_url: 'https://angular.io/resources/images/logos/angular2/angular.png',
                        url: 'https://github.com/angular/angular.js/wiki/Understanding-Scopes',
                        votes: 8,
                        description: 'Understanding scopes and javascript prototypal inheritance',
                        is_free: true
                    },
											{
                        category_id: findCategory('javascript', data[1]),
                        type_id: findType('video', data[2]),
                        person_id: findPerson('Wat', data[0]),
<<<<<<< HEAD
                        title: 'Latent flip',
                        url: 'http://latentflip.com/loupe,
=======
                        image_url: 'http://www.appsdev.is.ed.ac.uk/blog/wp-content/uploads/2015/03/Event-loop.png',
                        title: 'JavaScript Event Loop',
                        url: 'http://latentflip.com/loupe/',
>>>>>>> 2b4c776594d01909aadcd38d0630dc6dcee1f355
                        votes: 10,
                        description: 'Loupe is a little visualisation to help you understand how JavaScript\'s call stack/event loop/callback queue interact with each other.',
                        is_free: true
                    },
											{
                        category_id: findCategory('general', data[1]),
                        type_id: findType('article', data[2]),
                        person_id: findPerson('Wat', data[0]),
                        image_url: 'https://s-media-cache-ak0.pinimg.com/736x/c3/15/f8/c315f8567605b1ab1e9fb41294f52922.jpg',
                        title: 'Learn X in Y Minutes',
                        url: 'https://learnxinyminutes.com',
                        votes: 15,
                        description: 'Take a whirlwind tour of your next favorite language. Community-driven!',
                        is_free: true
                    },
											{
                        category_id: findCategory('database', data[1]),
                        type_id: findType('online-course', data[2]),
                        person_id: findPerson('Wat', data[0]),
                        image_url: 'https://s-media-cache-ak0.pinimg.com/564x/da/17/68/da17685033e4ee2adc630443ace50d8b.jpg',
                        title: 'Sequel Zoo',
                        url: 'http://sqlzoo.net',
                        votes: 6,
                        description: 'Learn SQL using: SQL Server, Oracle, MySQL, DB2, and PostgreSQL.',
                        is_free: true
                    },
											{
                        category_id: findCategory('node', data[1]),
                        type_id: findType('online-course', data[2]),
                        person_id: findPerson('Wat', data[0]),
                        image_url: 'http://nodeschool.io/international-day/images/international-day-logo.png',
                        title: 'Node-School',
                        url: 'http://nodeschool.io',
                        votes: 16,
                        description: 'Open source workshops that teach web software skills. Do them on you own or at a workshop nearby',
                        is_free: true
                    }
									])
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
