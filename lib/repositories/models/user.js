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
    following: {
        relation: Model.ManyToManyRelation,
        modelClass: User,
        join: {
            from: 'users.id',
            through: {
                from: 'follows.follower_id',
                to: 'follows.followed_id'
            },
            to: 'users.id'
        }
    }
};

exports = module.exports = User;
