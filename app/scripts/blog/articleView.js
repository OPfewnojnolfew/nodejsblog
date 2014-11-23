/**
 * 文章视图
 * @param  {[type]} require
 * @param  {[type]} exports
 * @param  {[type]} module
 * @return {[type]}
 */
define(function(require, exports, module) {
    //模板地址
    var templates = {
        LIST: '/assets/scripts/blog/template/list.html'
    };
    var template = require('modules/template');
    var AnalyzeView = function(events) {
        if (events) {
            var item;
            for (item in events) {
                if (events.hasOwnProperty(item)) {
                    (function(item) {
                        PubSub.subscribe(item, function(msg, data) {
                            events[item](data);
                        });
                    })(item);
                }
            }
        }
    };
    AnalyzeView.prototype = {
        init: function() {

        },
        /**
         * 展示文章列表
         * @param  {[type]} res
         * @return {[type]}
         */
        renderArticles: function(res) {
            template.loadTemplate(templates.LIST).then(function(tpl) {
                $('.article-container').html(tpl({
                    articles: res.articles
                }));
            });
        },
        bindEvents: function() {

        }
    };
    module.exports = AnalyzeView;
});
