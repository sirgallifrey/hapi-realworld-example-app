'use strict';

const Objection = require('objection');
const Model = Objection.Model;
const Knex = require('knex');
const KnexFile = require('../../knexfile');
const UserRepository = require('./userRepository');
const ArticleRepository = require('./articleRepository');
const CommentRepository = require('./commentRepository');

exports.register = (plugin, options, next) => {

    if (!Model.knex()) {
        const knex = Knex(KnexFile[process.env.NODE_ENV] || KnexFile.development);
        Model.knex(knex);
    }

    const repositories = {
        User: UserRepository,
        Article: ArticleRepository,
        Comment: CommentRepository
    };

    plugin.decorate('server', 'repositories', repositories);

    next();
};

exports.register.attributes = {
    name: 'repositories',
    version: '0.0.1',
    once: true
};
