var mongoClient = require('mongodb').MongoClient,
    databaseNAddress = 'mongodb://localhost:27017/blog';

function connect(callback) {
    mongoClient.connect(databaseNAddress, function(err, db) {
        if (err) {
            return;
        }
        callback(db);
    });
}

function query(collectionName, callback) {
    connect(function(db) {
        var collection = db.collection(collectionName);
        collection.find().toArray(function(err, items) {
            callback(items);
        });
    });
}

function insert(collectionName, obj, callback) {
    connect(function(db) {
        var collection = db.collection(collectionName);
        collection.insert(obj, {
            w: 1
        }, function(err, result) {
            callback();
        });
    });

}
exports.query = query;
exports.insert = insert;
