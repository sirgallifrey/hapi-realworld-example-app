'use strict';

const Objection = require('objection');
const Model = Objection.Model;
const AbstractModel = require('./abstractModel');

class Tag extends AbstractModel {

    static get table() {

        return 'tags';
    }
};

Tag.relationMappings = {
    tags: {
        relation: Model.ManyToManyRelation,
        modelClass: 'Article',
        join: {
            from: 'Tag.id',
            through: {
                from: 'article_tag.tag_id',
                to: 'article_tag.article_id'
            },
            to: 'Article.id'
        }
    }
};

exports = module.exports = Tag;
