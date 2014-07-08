var http = require('http');
var MongoClient = require('mongodb').MongoClient;

function getArticle(response) {
    MongoClient.connect('mongodb://localhost:27017/blog', function(err, db) {
        if (err) {
            return console.dir(err);
        }
        var collection = db.collection('article');
        collection.find().toArray(function(err, items) {
            response.writeHead(200, {
                'Content-Type': 'text/plain'
            });
            response.write('getArticle');
            response.end();
        });
    });
}

function addArticle(response) {
    var doc = {};
    MongoClient.connect('mongodb://localhost:27017/blog', function(err, db) {
        if (err) {
            return console.dir(err);
        }
        var collection = db.collection('article');
        collection.insert(doc, {
            w: 1
        }, function(err, result) {});
    });
}
exports.getArticle = getArticle;
exports.addArticle = addArticle;
