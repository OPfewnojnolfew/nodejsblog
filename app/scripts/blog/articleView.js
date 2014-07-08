define(function(require, exports, module) {
    var AnalyzeView = new Class({
        Implements: [Events, Options],
        initialize: function(options) {
            var that = this;
            this.controller = options.controller;
            this.bindEvents();
            this.getArticle();
        },
        getArticle: function() {
            var that = this;
            this.controller.getArticle(function(res) {
                var $result = $(that.controller.templateObj({
                    'articleList': res.data.articleList
                }));
                $('#articleList').html($result);
            });
        },
        bindEvents: function() {
            var that = this;
            $('#submit').on('click', function() {
                var title = $('#title').val(),
                    content = $('#content').val();
                that.controller.addArticle({
                    title: title,
                    content: content
                }, function() {
                    alert('yes');
                });
            });
        }
    });
    module.exports = AnalyzeView;
});
