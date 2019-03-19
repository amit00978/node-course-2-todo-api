const {MongoClient,ObjectId} = require('mongodb');

var obj=new ObjectId();
console.log("object id",obj);
const user={name:'amit',age:'24'}
//var name=user.name;
var {name}=user;
console.log("user",name);
// Connection URL
const url = 'mongodb://localhost:27017';
const dbName ='todos';
MongoClient.connect(url,(err,client)=>{
    if(err)
    return console.log("unable to connect to the server");
    console.log("Server is running sucssfully");
    const db = client.db(dbName);

    // db.collection('Todos').insertOne({
    //     text: 'To do something1'
    // },(err,result)=>{
    //     if(err)
    //     console.log("uanble to insert",err);
    //     console.log(JSON.stringify(result.ops,undefined,2));
    // });




    // db.collection('users').insertOne({
    //     name:'amit',
    //     age:'24',
    //     location:'noida'
    // },(err,result)=>{
    //     if(err)
    //     console.log("unable to insert the value",err);
    //     console.log(JSON.stringify(result.ops[0]._id.getTimestamp(),undefined,5))
    // })
    client.close();
});