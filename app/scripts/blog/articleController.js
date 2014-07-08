define(function(require, exports, module) {
    var ArticleController = new Class({
        initialize: function(options) {
            this.pageIndex = 1;
            this.pageSize = 10;
            this.model = options.model;
            this.templateObj = null;

        },
        getArticle: function(callback) {
            var that = this;
            this.model.getArticle(function(res) {
                that.loadTemplate(function() {
                    callback(JSON.parse(res));
                });
            });
        },
        addArticle: function(param, callback) {
            this.model.addArticle(param, function() {
                callback();
            });
        },
        loadTemplate: function(callback) {
            var that = this;
            if (this.templateObj) {
                callback(that.templateObj);
            } else {
                this.model.loadTemplate(function(tem) {
                    that.templateObj = Handlebars.compile(tem);
                    callback(that.templateObj);
                });
            }
        },
    });
    module.exports = ArticleController;
});
