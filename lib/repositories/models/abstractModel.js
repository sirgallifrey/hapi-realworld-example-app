'use strict';

const Objection = require('objection');
const Model = Objection.Model;
const MapKeys = require('lodash.mapkeys');
const CamelCase = require('lodash.camelcase');
const SnakeCase = require('lodash.snakecase');

exports = module.exports = class AbstractModel extends Model {

    $beforeUpdate() {

        this.updated_at = new Date().toISOString();
    }

    $formatDatabaseJson(json) {

        json = super.$formatDatabaseJson(json);

        return MapKeys(json, (value, key) => {

            return SnakeCase(key);
        });
    }

    $parseDatabaseJson(json) {

        json = MapKeys(json, (value, key) => {

            return CamelCase(key);
        });
        
        return super.$parseDatabaseJson(json);
    }
};
