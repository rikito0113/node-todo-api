const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    // find one and update
    // db.collection('Todos').findOneAndUpdate({
    //     text: 'walk the dog'
    // },{
    //     $set:{
    //         text: 'Walk the dog'
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((result)=>{
    //     console.log(result);
    // });

    // challenge
    db.collection('Users').findOneAndUpdate({
        name: 'rikito'
    },{
        $set:{
            name: 'kim'
        },
        // inclease this number
        $inc:{
            age:1 // your can put also other number
        }
    }, {
        returnOriginal: false
    }).then((result)=>{
        console.log(result);
    });

    client.close();
});