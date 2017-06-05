'use strict';

const AbstractModel = require('./abstractModel');

exports = module.exports = class Comment extends AbstractModel {

    static get table() {

        return 'comments';
    }
};
