// pull something out of the library that wee installed
// mongo client => lets you connect to a mongo server 
// const MongoClient = require('mongodb').MongoClient;
// => identical
const {MongoClient,ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);

// var user = {name:'Rikito',age: 25};
// var {name} = user;
// console.log(name);

// to connect to the database
// needs 2 argugments 
// 1, string => URL where database lives now
// 2, callback function => will fire after the connection has either succeed or failed
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,client)=>{
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');
    // insert to Todos collection 
    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // },(err,result)=>{
    //     if(err){
    //         return console.log('Unable to insert todos',err);
    //     }
    //     console.log(JSON.stringify(result.ops,undefined,2));
    // });

    // insert to Users collection
    // db.collection('Users').insertOne({
    //     name: 'Rikito',
    //     age: 25,
    //     location: 'Vancouver'
    // },(err,result)=>{
    //     if(err){
    //         return console.log('Unable to insert to Users',err);
    //     }
    //     console.log(JSON.stringify(result.ops[0]._id.getTimestamp(),undefined,2));
    // });
    client.close();
});