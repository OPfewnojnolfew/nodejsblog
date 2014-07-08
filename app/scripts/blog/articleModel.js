define(function(require, exports, module) {
    var ArticleModel = new Class({
        initialize: function(options) {},
        getArticle: function(callback) {
            $.get('/serve/getArticle', callback);
        },
        addArticle: function(param, callback) {
            $.post('/serve/addArticle', param, callback);
        }
    });
    module.exports = ArticleModel;
});
