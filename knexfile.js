'use strict';

module.exports = {

    development: {
        client: 'postgresql',
        connection: {
            host: 'db',
            database: 'postgres',
            user: 'postgres',
            password: ''
        },
        debug:true,
        pool: {
            min: 2,
            max: 10
        },
        migrations: {
            tableName: 'knex_migrations',
            directory: './lib/repositories/migrations'
        },
        seeds: {
            directory: './lib/repositories/seeds'
        }
    }
};
