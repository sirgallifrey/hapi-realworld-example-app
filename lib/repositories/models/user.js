'use strict';

const Objection = require('objection');
const Model = Objection.Model;
const AbstractModel = require('./abstractModel');

class User extends AbstractModel {

    static get tableName() {

        return 'users';
    }
};

User.relationMappings = {
    articles: {
        relation: Model.HasManyRelation,
        modelClass: __dirname + '/article',
        join: {
            from: 'users.id',
            to: 'articles.author'
        }
    }
};


exports = module.exports = User;
