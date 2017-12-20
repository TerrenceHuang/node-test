"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Mongodb = require("mongodb");
class MongodbConnector {
    constructor() {
        this.client = Mongodb.MongoClient;
        this.url = "mongodb://localhost:27017/";
    }
    createCollection(collectionName) {
        this.client.connect(this.url + this.dbName, (err, db) => {
            if (err)
                throw err;
            db.createCollection(collectionName, (err, res) => {
                if (err)
                    throw err;
                console.log("Collection: " + collectionName + " created!");
                db.close();
            });
        });
    }
    deleteMany(condition) {
        this.client.connect(this.url + this.dbName, (err, db) => {
            if (err)
                throw err;
            db.collection(this.collectionName).deleteMany(condition, (err, obj) => {
                if (err)
                    throw err;
                console.log(obj.result.n + " document deleted");
                db.close();
            });
        });
    }
    deleteOne(condition) {
        this.client.connect(this.url + this.dbName, (err, db) => {
            if (err)
                throw err;
            db.collection(this.collectionName).deleteOne(condition, (err, obj) => {
                if (err)
                    throw err;
                console.log("1 document deleted");
                db.close();
            });
        });
    }
    dropColection(name) {
        this.client.connect(this.url + this.dbName, (err, db) => {
            if (err)
                throw err;
            db.dropCollection(name, (err, delOK) => {
                if (err)
                    throw err;
                if (delOK)
                    console.log("Collection deleted");
                db.close();
            });
        });
    }
    findAll() {
        this.client.connect(this.url + this.dbName, (err, db) => {
            if (err)
                throw err;
            db.collection(this.collectionName).find().toArray((err, result) => {
                if (err)
                    throw err;
                console.log(result);
                db.close();
            });
        });
    }
    findOne() {
        this.client.connect(this.url + this.dbName, (err, db) => {
            if (err)
                throw err;
            db.collection(this.collectionName).findOne({}, (err, result) => {
                if (err)
                    throw err;
                console.log(result.name);
                db.close();
            });
        });
    }
    insertMultiple(objs) {
        this.client.connect(this.url + this.dbName, (err, db) => {
            if (err)
                throw err;
            db.collection(this.collectionName).insertMany(objs, (err, res) => {
                if (err)
                    throw err;
                console.log("Number of documents inserted: " + res.insertedCount);
                db.close();
            });
        });
    }
    insertOne(obj) {
        this.client.connect(this.url + this.dbName, (err, db) => {
            if (err)
                throw err;
            db.collection(this.collectionName).insertOne(obj, (err, res) => {
                if (err)
                    throw err;
                console.log("1 document inserted");
                db.close();
            });
        });
    }
    limit(n) {
        this.client.connect(this.url + this.dbName, (err, db) => {
            if (err)
                throw err;
            db.collection(this.collectionName).find().limit(n).toArray((err, result) => {
                if (err)
                    throw err;
                console.log(result);
                db.close();
            });
        });
    }
    query(condition) {
        this.client.connect(this.url + this.dbName, (err, db) => {
            if (err)
                throw err;
            db.collection(this.collectionName).find(condition).toArray((err, result) => {
                if (err)
                    throw err;
                console.log(result);
                db.close();
            });
        });
    }
    sort(condition) {
        this.client.connect(this.url + this.dbName, (err, db) => {
            if (err)
                throw err;
            db.collection(this.collectionName).find().sort(condition).toArray((err, result) => {
                if (err)
                    throw err;
                console.log(result);
                db.close();
            });
        });
    }
    updateMany(condition, value) {
        this.client.connect(this.url + this.dbName, (err, db) => {
            if (err)
                throw err;
            db.collection(this.collectionName).updateMany(condition, value, (err, res) => {
                if (err)
                    throw err;
                console.log("1 document updated");
                db.close();
            });
        });
    }
    updateOne(condition, value) {
        this.client.connect(this.url + this.dbName, (err, db) => {
            if (err)
                throw err;
            db.collection(this.collectionName).updateOne(condition, value, (err, res) => {
                if (err)
                    throw err;
                console.log("1 document updated");
                db.close();
            });
        });
    }
    useCollection(collectionName) {
        this.collectionName = collectionName;
    }
    useDb(dbName) {
        this.dbName = dbName;
    }
}
exports.MongodbConnector = MongodbConnector;
//# sourceMappingURL=mongodb-connector.js.map