var http = require('http'),
    mongodbHelper = require('./mongodbHelper');

function getArticle() {
    var that = this;
    mongodbHelper.query('article', function(res) {
        that.send({
            code: '200',
            message: '查询成功',
            data: {
                articleList: res
            }
        });
    });
}

function addArticle() {
    var that = this;
    mongodbHelper.insert('article', this.request.postData, function() {
        that.send({
            code: '200',
            message: '新增成功',
            data: {}
        });
    });
}
exports.getArticle = getArticle;
exports.addArticle = addArticle;
