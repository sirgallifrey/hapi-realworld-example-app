'use strict';

exports.register = (server, options, next) => {

    next();
};

exports.register.attributes = {
    name: 'api',
    version: '0.0.1',
    once: true
};
