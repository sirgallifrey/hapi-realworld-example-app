'use strict';

exports.up = (knex, Promise) => {

    return Promise.all([
        knex.schema.createTable('users', (table) => {

            table.increments('id').primary();
            table.string('email').unique().notNullable();
            table.string('username').unique().notNullable();
            table.string('hashed_password').notNullable();
            table.string('image');
            table.text('bio');
            table.timestamp('created_at').defaultTo(knex.fn.now());
            table.timestamp('updated_at').defaultTo(knex.fn.now());
        }),
        knex.schema.createTable('articles', (table) => {

            table.increments('id').primary();
            table.string('slug').unique().notNullable();
            table.string('title');
            table.text('description');
            table.text('body');
            table.integer('author').unsigned().references('id').inTable('users').notNullable();
            table.timestamp('created_at').defaultTo(knex.fn.now());
            table.timestamp('updated_at').defaultTo(knex.fn.now());
        }),
        knex.schema.createTable('comments', (table) => {

            table.increments('id').primary();
            table.text('body');
            table.integer('user_id').unsigned().references('id').inTable('users').notNullable();
            table.integer('article_id').unsigned().references('id').inTable('articles').notNullable();
            table.timestamp('created_at').defaultTo(knex.fn.now());
            table.timestamp('updated_at').defaultTo(knex.fn.now());
        }),
        knex.schema.createTable('tags', (table) => {

            table.increments('id').primary();
            table.string('name').unique();
        }),
        knex.schema.createTable('article_tag', (table) => {

            table.increments('id').primary();
            table.integer('tag_id').unsigned().references('id').inTable('tags').onDelete('cascade').notNullable();
            table.integer('article_id').unsigned().references('id').inTable('articles').onDelete('cascade').notNullable();
        }),
        knex.schema.createTable('follows', (table) => {

            table.increments('id').primary();
            table.integer('follower_id').unsigned().references('id').inTable('users').onDelete('cascade').notNullable();
            table.integer('followed_id').unsigned().references('id').inTable('users').onDelete('cascade').notNullable();
            table.timestamp('created_at').defaultTo(knex.fn.now());
            table.timestamp('updated_at').defaultTo(knex.fn.now());
        }),
        knex.schema.createTable('favorites', (table) => {

            table.increments('id').primary();
            table.integer('user_id').unsigned().references('id').inTable('users').onDelete('cascade').notNullable();
            table.integer('article_id').unsigned().references('id').inTable('articles').onDelete('cascade').notNullable();
            table.timestamp('created_at').defaultTo(knex.fn.now());
            table.timestamp('updated_at').defaultTo(knex.fn.now());
        })
    ]);
};

exports.down = (knex, Promise) => {

    return Promise.all([
        knex.schema.dropTable('users'),
        knex.schema.dropTable('articles'),
        knex.schema.dropTable('comments'),
        knex.schema.dropTable('tags'),
        knex.schema.dropTable('article_tag')
    ]);
};
