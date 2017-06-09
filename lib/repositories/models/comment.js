'use strict';

const AbstractModel = require('./abstractModel');

exports = module.exports = class Comment extends AbstractModel {

    static get tableName() {

        return 'comments';
    }
};

Comment.relationMappings = {
    user: {
        relation: AbstractModel.BelongsToOneRelation,
        modelClass: __dirname + '/user',
        join: {
            from: 'comments.user_id',
            to: 'users.id'
        }
    },
    article: {
        relation: AbstractModel.BelongsToOneRelation,
        modelClass: __dirname + '/article',
        join: {
            from: 'comments.article_id',
            to: 'articles.id'
        }
    }
};