'use strict';

const Article = require('./models/article');

exports.findById = (id) => {

    return Article.query().where('id', id);
};

exports.findByIdWithAuthor = (id) => {

    return Article.query().where('id', id);
};

exports.create = (article) => {

    return Article.query().insert(article);
};
