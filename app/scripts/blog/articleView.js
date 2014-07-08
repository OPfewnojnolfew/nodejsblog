define(function(require, exports, module) {
    var AnalyzeView = new Class({
        Implements: [Events, Options],
        initialize: function(options) {
            var that = this;
            this.controller = options.controller;
            this.bindEvents();
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
