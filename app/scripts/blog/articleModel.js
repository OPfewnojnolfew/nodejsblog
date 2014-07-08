define(function(require, exports, module) {
    var ArticleModel = new Class({
        initialize: function(options) {},
        getArticle: function(callback) {
            $.get('/serve/getArticle', callback);
        },
        addArticle: function(param, callback) {
            $.post('/serve/addArticle', param, callback);
        },
        loadTemplate: function(callback) {
            $.get('/assets/inc/articleTemplate.html', callback);
        },
    });
    module.exports = ArticleModel;
});
