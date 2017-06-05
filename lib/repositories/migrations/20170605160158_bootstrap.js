'use strict';

exports.up = (knex, Promise) => {

    return knex.schema.createTable('users', (table) => {

        table.increments('id').primary();
        table.string('email').unique();
        table.string('username').unique();
        table.string('hashed_password');
        table.string('image');
        table.text('bio');
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
    }).then(() => {

        return knex.schema.createTable('articles', (table) => {

            table.increments('id').primary();
            table.string('slug').unique();
            table.string('title');
            table.text('description');
            table.text('body');
            table.timestamp('created_at').defaultTo(knex.fn.now());
            table.timestamp('updated_at').defaultTo(knex.fn.now());
        });
    }).then(() => {

        return knex.schema.createTable('comments', (table) => {

            table.increments('id').primary();
            table.text('body');
            table.timestamp('created_at').defaultTo(knex.fn.now());
            table.timestamp('updated_at').defaultTo(knex.fn.now());
        });
    }).then(() => {

        return knex.schema.createTable('tags', (table) => {

            table.increments('id').primary();
            table.string('name');
        });
    });
};

exports.down = (knex, Promise) => {

    return knex.schema.dropTable('users').then(() => {

        return knex.schema.dropTable('articles');
    }).then(() => {

        return knex.schema.dropTable('comments');
    }).then(() => {

        return knex.schema.dropTable('tags');
    });
};
