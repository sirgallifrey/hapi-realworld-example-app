'use strict';

const User = require('./models/user');
const Bcrypt = require('bcrypt');

exports.findById = (id) => {

    return User.query().where('id', id);
};

exports.create = (user) => {

    return Bcrypt.hash(user.password, 10).then((hash) => {

        const userWithHash = Object.assign({}, user, { hashedPassword: hash });
        delete userWithHash.password;
        return User.query().insert(userWithHash);
    });
};
