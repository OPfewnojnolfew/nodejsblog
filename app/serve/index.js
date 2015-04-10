// var server = require('./server');
// var router = require('./router');
// var article = require('./article/articleController');

// var handle = {};
// handle['/serve/getArticles'] = article.getArticles;
// handle['/serve/addArticle'] = article.addArticle;
// server.start(router.route, handle);







var http = require('http');
var express = require('express');
var app = express();
// var MongoClient = require('mongodb').MongoClient;
var mongodbHelper = require('./mongodbHelper');
// var router = express.Router();

// router.route('/serve/articles')
//     .all(function(req, res, next) {
//         // runs for all HTTP verbs first
//         // think of it as route specific middleware!
//     })
//     .get(function(req, res, next) {
//         return [{
//             'id': '1',
//             'name': 'ace'
//         }];
//     });

app.get('/serve/articles', function(req, res) {
    var self = this;
    mongodbHelper.query('article', function(res1) {
    	res.send(res1);
        // res.send({
  //     code: '200',
  //     message: '查询成功',
  //     articles: res1
  // });


    });
});
// app.get('/serve/getArticle', function(req, res) {
//     MongoClient.connect('mongodb://localhost:27017/blog', function(err, db) {
//         if (err) {
//             return console.dir(err);
//         }
//         var collection = db.collection('article');
//         collection.find().toArray(function(err, items) {
//             return items;
//         });
//     });
// });
// app.get('/serve/addArticle', function(req, res) {
//     var range = req.params.range;
//     var doc = {
//         'title': range[0],
//         'content': range[1]
//     };
//     console.log(doc);
//     MongoClient.connect('mongodb://localhost:27017/blog', function(err, db) {
//         if (err) {
//             return console.dir(err);
//         }
//         var collection = db.collection('article');
//         collection.insert(doc, {
//             w: 1
//         }, function(err, result) {});
//     });
// });
http.createServer(app).listen('4000', function() {});
