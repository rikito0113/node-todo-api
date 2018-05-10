const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    // delete many
    // db.collection('Todos').deleteMany({text:'Eat lunch'}).then((result)=>{
    //     console.log(result);
    // });

    // delete one
    // db.collection('Todos').deleteOne({text:'Eat lunch'}).then((result)=>{
    //     console.log(result);
    // });

    // find one and delete it
    // db.collection('Todos').findOneAndDelete({completed:false}).then((result)=>{
    //     console.log(result);
    // });

    // users<challenge>

    // deleteMany
    // db.collection('Users').deleteMany({name:'Rikito'}).then((result)=>{
    //     console.log(result);
    // });

    // deleteOne
    // db.collection('Users').deleteOne({age:26}).then((res)=>{
    //     console.log(res);
    // });

    // findOneAndDelete
    // db.collection('Users').findOneAndDelete({location:'hiroshima'}).then((res)=>{
    //     console.log(res);
    // });

    client.close();
});