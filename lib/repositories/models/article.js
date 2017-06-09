'use strict';

const Objection = require('objection');
const Model = Objection.Model;
const AbstractModel = require('./abstractModel');

class Article extends AbstractModel {

    static get tableName() {

        return 'articles';
    }
};

Article.relationMappings = {
    tags: {
        relation: Model.ManyToManyRelation,
        modelClass: __dirname + '/tag',
        join: {
            from: 'articles.id',
            through: {
                from: 'article_tag.article_id',
                to: 'article_tag.tag_id'
            },
            to: 'tags.id'
        }
    },
    author: {
        relation: Model.BelongsToOneRelation,
        modelClass: __dirname + '/user',
        join: {
            from: 'articles.author',
            to: 'users.id'
        }
    }
};

exports = module.exports = Article;
