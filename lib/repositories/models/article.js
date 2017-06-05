'use strict';

const Objection = require('objection');
const Model = Objection.Model;
const AbstractModel = require('./abstractModel');

class Article extends AbstractModel {

    static get table() {

        return 'articles';
    }
};

Article.relationMappings = {
    tags: {
        relation: Model.ManyToManyRelation,
        modelClass: 'Tag',
        join: {
            from: 'Article.id',
            through: {
                from: 'article_tag.article_id',
                to: 'article_tag.tag_id'
            },
            to: 'Tag.id'
        }
    }
};

exports = module.exports = Article;
