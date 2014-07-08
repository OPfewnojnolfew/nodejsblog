define(function(require, exports, module) {
    var ArticleController = new Class({
        initialize: function(options) {
            this.pageIndex = 1;
            this.pageSize = 10;
            this.model = options.model;
        },
        getArticle: function(param, callback) {
            this.model.getArticle(param, function() {
                callback();
            });
        },
        addArticle: function(param, callback) {
            this.model.addArticle(param, function() {
                callback();
            });
        }
    });
    module.exports = ArticleController;
});
