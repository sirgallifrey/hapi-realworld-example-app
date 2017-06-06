'use strict';

const Faker = require('faker');

require('./lib/server').createServer((err, server) => {

    if (err) {
        throw err;
    }
    server.start((err) => {

        if (err) {
            throw err;
        }

        console.log(`Server has started at: ${server.info.uri}`);
        
        server.repositories.User.create({
            email: Faker.internet.email(),
            username: Faker.internet.userName(),
            hashedPassword: 'myhashedpassword'
        }).then((user) => {

            console.log('user inserted');
            return server.repositories.Article.create(user, {
                slug: Faker.lorem.slug(),
                title: Faker.lorem.words(),
                body: Faker.lorem.paragraphs()
            });
        }).catch((e) => {

            console.log('catched');
            console.log(e);

            process.nextTick(() => {

                throw e;
            });
        });
    });
});
