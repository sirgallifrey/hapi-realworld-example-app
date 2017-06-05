'use strict';

const Article = require('./models/article');

exports.findById = (id) => {

    return Article.query().where('id', id);
};

exports.create = (properties) => {

    return Article.query().insert(properties);
};
