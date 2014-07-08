define(function(require, exports, module) {
    var ArticleModel = new Class({
        initialize: function(options) {},
        getArticle: function(callback) {
            $.get('/serve/getArticle', callback);
        },
        addArticle: function(param, callback) {
            $.get('/serve/addArticle', param, callback);
        }
    });
    module.exports = ArticleModel;
});
