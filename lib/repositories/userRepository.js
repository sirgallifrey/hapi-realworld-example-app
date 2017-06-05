'use strict';

const User = require('./models/user');

exports.findById = (id) => {

    return User.query().where('id', id);
};

exports.create = (properties) => {

    return User.query().insert(properties);
};
