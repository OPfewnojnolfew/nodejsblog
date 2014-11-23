var http = require('http'),
    mongodbHelper = require('../mongodbHelper');

var controller = {
    getArticles: function() {
        var self = this;
        mongodbHelper.query('article', function(res) {
            self.send({
                code: '200',
                message: '查询成功',
                articles: res
            });
        });
    },

    addArticle: function() {
        var self = this;
        mongodbHelper.insert('article', this.request.postData, function() {
            self.send({
                code: '200',
                message: '新增成功',
                data: {}
            });
        });
    }
};
module.exports = controller;
