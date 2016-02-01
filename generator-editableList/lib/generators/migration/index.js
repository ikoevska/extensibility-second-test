'use strict';

var Base = require('screen-builder-base-generator/lib/generator');

module.exports = Base.extend({
    initializing: function () {
        this._initializing();
    },

    prompting: function () {
        this._prompting();
    },

    configuring: function () {
        this.pendingChange.write();
    },

    writing: {
        app: function () {}
    }
});
