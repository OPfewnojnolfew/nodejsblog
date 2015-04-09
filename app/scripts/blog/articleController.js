/**
 * 文章控制器
 * @param  {[type]} require
 * @param  {[type]} exports
 * @param  {[type]} module
 * @return {[type]}
 */
define(function(require, exports, module) {
    var View = require('./ArticleView'),
        model = require('./ArticleCollection'),
        view;
    var ArticleController = function() {};
    ArticleController.prototype = {
        init: function() {
            var self = this;
            view = new View({
                'article.getArticles': function(param) {
                    self.getArticles(param);
                },
                'article.getArticle': function(id) {
                    self.getArticle(id);
                }
            });
            this.getArticles();
        },
        /**
         * 根据条件获取文章列表
         * @param  {[type]} param
         * @return {[type]}
         */
        getArticles: function(param) {
            model.getArticles(param).then(function(res) {
                view && view.renderArticles(res);
            });
        },
        getArticle: function(id) {

        }
    };
    module.exports = ArticleController;
});
