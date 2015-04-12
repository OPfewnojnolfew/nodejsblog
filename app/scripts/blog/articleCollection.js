define(function(require, exports, module) {
    var Model = require('./articleModel');
    var Collection = Backbone.Collection.extend({
        model: Model,
        url: '/serve/articles',
        initialize: function() {},
        parse: function(res) {
            if (res.code === '200') {
                return res.articles;
            }
            return [];
        }
    });
    module.exports = Collection;
});
