'use strict';

const Article = require('./models/article');
const User = require('./models/user');

exports.findById = (id) => {

    return Article.query().where('id', id);
};

exports.create = (user, properties) => {
    console.log('*************************************');
    console.log(user);

    if (user instanceof User) {
        console.log('user typeof user');
        return user.$relatedQuery('articles').insert(properties);
    }
    const propertiesWithAuthor = Object.assign({ author: user }, properties);
    return Article.query().insert(propertiesWithAuthor);
};
