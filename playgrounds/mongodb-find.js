const {MongoClient,ObjectId} = require('mongodb');

const url = 'mongodb://localhost:27017';
const dbName ='todos';
MongoClient.connect(url,(err,client)=>{
    if(err)
    return console.log("unable to connect to the server");
    console.log("Server is running sucssfully");
    const db = client.db(dbName);
    // db.collection('users').find({"_id" : new ObjectId('5c8ff5bb9bf97c1300c459b7')}).toArray().then((docs)=>{
    //     console.log("docs",JSON.stringify(docs,undefined,6));
    // },(err)=>{
    //     console.log("error is -==",err);
    // })
    
    // db.collection('users').find().count().then((count)=>{
    //     console.log("users===",count);
    // },(error)=>{
    //     console.log("Error=",error);
    // })


    db.collection('users').find({'name':'amit'}).toArray().then((docs)=>{
        console.log("Docs",JSON.stringify(docs,undefined,4));
    },(error)=>{
        console.log("Error",error);
    });
   client.close();
});