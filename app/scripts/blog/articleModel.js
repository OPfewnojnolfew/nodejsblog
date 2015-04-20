define(function(require, exports, module) {
    var URLS = {
        GET_ARTICLES: '/serve/article/articles'
    };
    var Model = {
        _ajax: function(url, data, type) {
            return $.ajax({
                url: url,
                dataType: 'json',
                type: type || 'get',
                data: data || {}
            });
        },
        getArticles: function(param) {
            return this._ajax(URLS.GET_ARTICLES, param);
        }
    };
    module.exports = Model;
});
