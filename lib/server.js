'use strict';

const Glue = require('glue');
const Hoek = require('hoek');
const Manifest = require('./manifest');
const defaultOptions = {
    relativeTo: __dirname
};

exports.createServer = function (manifest, options, callback) {

    if (typeof arguments[2] === 'undefined' && typeof arguments[1] === 'function') {
        callback = options;
        options = undefined;
    }

    const mergedManifest = manifest ? Hoek.applyToDefaults(Manifest, manifest) : Manifest;
    const mergedOptions = options ? Hoek.applyToDefaults(defaultOptions, options) : defaultOptions;
    return Glue.compose(mergedManifest, mergedOptions, callback);
};
