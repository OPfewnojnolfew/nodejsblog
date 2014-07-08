define(function(require, exports, module) {
    function init() {
        var ArticleModel = require('articleModel'),
            ArticleController = require('articleController'),
            ArticleView = require('articleView');
        $(function() {
            var articleModel = new ArticleModel(),
                articleController = new ArticleController({
                    model: articleModel
                }),
                articleView = new ArticleView({
                    controller: articleController
                });
        });
    }
    exports.init = init;
});
