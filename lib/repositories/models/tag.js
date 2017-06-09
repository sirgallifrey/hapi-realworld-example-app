'use strict';

const Objection = require('objection');
const Model = Objection.Model;
const AbstractModel = require('./abstractModel');

class Tag extends AbstractModel {

    static get tableName() {

        return 'tags';
    }
};

Tag.relationMappings = {
    articles: {
        relation: Model.ManyToManyRelation,
        modelClass: __dirname + '/article',
        join: {
            from: 'tags.id',
            through: {
                from: 'article_tag.tag_id',
                to: 'article_tag.article_id'
            },
            to: 'articles.id'
        }
    }
};

exports = module.exports = Tag;
