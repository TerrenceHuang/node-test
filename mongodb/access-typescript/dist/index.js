"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongodb_connector_1 = require("./mongodb-connector");
let mongodbConnector = new mongodb_connector_1.MongodbConnector();
// mongodbConnector.createCollection("users");
mongodbConnector.useDb("typescript-test");
mongodbConnector.useCollection("users");
// let obj = { name: "Naruto", sex: "male" };
// mongodbConnector.insertOne(obj);
// let objs = [
//     { name: "Sasuke", sex: "male" },
//     { name: "Kakashi", sex: "male" },
//     { name: "Sakura", sex: "female" }
// ];
// mongodbConnector.insertMultiple(objs);
// mongodbConnector.findOne();
// mongodbConnector.findAll();
// let query = { sex: "male" };
// let query_m = { sex: /^m/ };
// mongodbConnector.query(query_m);
// let sort = { name: -1 };
// mongodbConnector.sort(sort);
// let condition = { name: "sakura" };
// mongodbConnector.delete(condition);
// let condition = { sex: "female" };
// mongodbConnector.deleteMany(condition);
// mongodbConnector.dropColection("users");
// let condition = { name: "Naruto" };
// // first method
// let value = { name: "Naruto", sex: "female" };
// // alternative
// // let value = { $set: { sex: "female" } };
// mongodbConnector.updateOne(condition, value);
mongodbConnector.limit(2);
//# sourceMappingURL=index.js.map