var http = require('http');
var MongoClient = require('mongodb').MongoClient;

function getArticle(response, postData) {
    MongoClient.connect('mongodb://localhost:27017/blog', function(err, db) {
        if (err) {
            return console.dir(err);
        }
        var collection = db.collection('article');
        collection.find().toArray(function(err, items) {
            response.writeHead(200, {
                'Content-Type': 'text/plain'
            });
            response.write(JSON.stringify({
                code: '200',
                message: '查询成功',
                data: {
                    articleList: items
                }
            }));
            response.end();
        });
    });
}

function addArticle(response, postData) {
    MongoClient.connect('mongodb://localhost:27017/blog', function(err, db) {
        if (err) {
            return console.dir(err);
        }
        var collection = db.collection('article');
        collection.insert(postData, {
            w: 1
        }, function(err, result) {
            response.writeHead(200, {
                'Content-Type': 'text/plain'
            });
            response.write(JSON.stringify({
                code: '200',
                message: '新增成功',
                data: {}
            }));
            response.end();
        });
    });
}
exports.getArticle = getArticle;
exports.addArticle = addArticle;
