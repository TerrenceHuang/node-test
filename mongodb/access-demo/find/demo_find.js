var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;

    var dbase = db.db("hi");
    dbase.collection("customers").find({}).toArray(function(err, result) {
        if (err) throw err;

        console.log(result);
        db.close();
    });
});