import * as Mongodb from "mongodb";

export class MongodbConnector {

    client: Mongodb.MongoClient;
    url: string;
    dbName: string;
    collectionName: string;

    constructor() {
        this.client = Mongodb.MongoClient;
        this.url = "mongodb://localhost:27017/";
    }

    createCollection(collectionName: string) {
        this.client.connect(this.url + this.dbName, (err, db) => {
            if (err) throw err;

            db.createCollection(collectionName, (err, res) => {
                if (err) throw err;

                console.log("Collection: " + collectionName + " created!");
                db.close();
            });
        });
    }

    deleteMany(condition: object) {
        this.client.connect(this.url + this.dbName, (err, db) => {
            if (err) throw err;

            db.collection(this.collectionName).deleteMany(condition, (err, obj) => {
                if (err) throw err;

                console.log(obj.result.n + " document deleted");
                db.close();
            });
        });
    }

    deleteOne(condition: object) {
        this.client.connect(this.url + this.dbName, (err, db) => {
            if (err) throw err;

            db.collection(this.collectionName).deleteOne(condition, (err, obj) => {
                if (err) throw err;

                console.log("1 document deleted");
                db.close();
            });
        });
    }

    dropColection(name: string) {
        this.client.connect(this.url + this.dbName, (err, db) => {
            if (err) throw err;

            db.dropCollection(name, (err, delOK) => {
                if (err) throw err;

                if (delOK) console.log("Collection deleted");
                db.close();
            });
        });
    }

    findAll() {
        this.client.connect(this.url + this.dbName, (err, db) => {
            if (err) throw err;

            db.collection(this.collectionName).find().toArray((err, result) => {
                if (err) throw err;

                console.log(result);
                db.close();
            });
        });
    }

    findOne() {
        this.client.connect(this.url + this.dbName, (err, db) => {
            if (err) throw err;

            db.collection(this.collectionName).findOne({}, (err, result) => {
                if (err) throw err;

                console.log(result.name);
                db.close();
            });
        });
    }

    insertMultiple(objs: object[]) {
        this.client.connect(this.url + this.dbName, (err, db) => {
            if (err) throw err;

            db.collection(this.collectionName).insertMany(objs, (err, res) => {
                if (err) throw err;

                console.log("Number of documents inserted: " + res.insertedCount);
                db.close();
            });
        });
    }

    insertOne(obj: object) {
        this.client.connect(this.url + this.dbName, (err, db) => {
            if (err) throw err;

            db.collection(this.collectionName).insertOne(obj, (err, res) => {
                if (err) throw err;

                console.log("1 document inserted");
                db.close();
            });
        });
    }

    limit(n: number) {
        this.client.connect(this.url + this.dbName, (err, db) => {
            if (err) throw err;

            db.collection(this.collectionName).find().limit(n).toArray((err, result) => {
                if (err) throw err;

                console.log(result);
                db.close();
            });
        });
    }

    query(condition: object) {
        this.client.connect(this.url + this.dbName, (err, db) => {
            if (err) throw err;

            db.collection(this.collectionName).find(condition).toArray((err, result) => {
                if (err) throw err;

                console.log(result);
                db.close();
            });
        });
    }

    sort(condition: object) {
        this.client.connect(this.url + this.dbName, (err, db) => {
            if (err) throw err;

            db.collection(this.collectionName).find().sort(condition).toArray((err, result) => {
                if (err) throw err;

                console.log(result);
                db.close();
            });
        });
    }

    updateMany(condition: object, value: object) {
        this.client.connect(this.url + this.dbName, (err, db) => {
            if (err) throw err;

            db.collection(this.collectionName).updateMany(condition, value, (err, res) => {
                if (err) throw err;

                console.log("1 document updated");
                db.close();
            });
        });
    }

    updateOne(condition: object, value: object) {
        this.client.connect(this.url + this.dbName, (err, db) => {
            if (err) throw err;

            db.collection(this.collectionName).updateOne(condition, value, (err, res) => {
                if (err) throw err;

                console.log("1 document updated");
                db.close();
            });
        });
    }

    useCollection(collectionName: string) {
        this.collectionName = collectionName;
    }

    useDb(dbName: string) {
        this.dbName = dbName;
    }
}