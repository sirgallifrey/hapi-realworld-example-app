'use strict';

const Comment = require('./models/comment');

exports.findById = (id) => {

    return Comment.query().where('id', id);
};

exports.create = (properties) => {

    return Comment.query().insert(properties);
};
