var MongoClient = require('mongodb').MongoClient;
var url ="mongodb://localhost:27017/mydb";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;

    var myobj = [
        { _id: 154, name: 'Chocolate Heaven'},
        { _id: 155, name: 'Tasty Lemon'},
        { _id: 156, name: 'Vanilla Dream'}
    ];

    var dbase = db.db("hi");
    dbase.collection("products").insertMany(myobj, function(err, res) {
        if (err) throw err;

        console.log(res);
        db.close();
    });
});