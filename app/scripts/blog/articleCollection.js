define(function(require, exports, module) {
    var URLS = {
            GET_ARTICLES: '/serve/getArticles'
        },
        Model = require('./articleModel');
    var Collection = Backbone.Collection.extend({
        model: Model,
        url: '/serve/articles',
        // _ajax: function(url, data, type) {
        //     return $.ajax({
        //         url: url,
        //         dataType: 'json',
        //         type: type || 'get',
        //         data: data || {}
        //     });
        // },
        initialize: function() {
                this.models = [];
            }
            // ,
            // getArticles: function(param) {
            //     var self = this;
            //     return this._ajax(URLS.GET_ARTICLES, param).then(function(res) {
            //         if (res === '200') {
            //             return (self.models = res.articles);
            //         }
            //     });
            // },
            // getCurrentArticleByID: function(id) {
            //     if (this.models) {
            //         return this.where({
            //             id: id
            //         });
            //     }
            //     return null;
            // }
    });
    module.exports = Collection;
});
