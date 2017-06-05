'use strict';

const AbstractModel = require('./abstractModel');

exports = module.exports = class User extends AbstractModel {

    static get table() {

        return 'users';
    }
};
