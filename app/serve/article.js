var express = require('express'),
    mongodbHelper = require('./mongodbHelper'),
    router = express.Router();

router.get('/articles', function(req, res) {
    console.log('xx');
    var self = this;
    var id = req.query.id;
    mongodbHelper.query('article', function(res1) {
        res.send({
            code: '200',
            message: '查询成功',
            articles: res1
        });

    });
});
module.exports = router;
// var http = require('http'),
//     mongodbHelper = require('./mongodbHelper');

// function getArticle() {
//     var self = this;
//     mongodbHelper.query('article', function(res) {
//         self.send({
//             code: '200',
//             message: '查询成功',
//             data: {
//                 articleList: res
//             }
//         });
//     });
// }

// function addArticle() {
//     var self = this;
//     mongodbHelper.insert('article', this.request.postData, function() {
//         self.send({
//             code: '200',
//             message: '新增成功',
//             data: {}
//         });
//     });
// }
// exports.getArticle = getArticle;
// exports.addArticle = addArticle;
