//const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
  if(err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('connected to MongoDB server');

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID("5c4fbf5c83c3636cc8b5cd50")
  // }, {
  //   $set : {
  //     completed : true
  //   }
  // }, {
  //   returnOriginal : false
  // }).then((result)=>{
  //   console.log(JSON.stringify(result, undefined, 2));
  // });

  db.collection('Users').findOneAndUpdate({
    _id : new ObjectID("5c4f10115a6e4d0ae050402c")
  },{
    $inc : {
      age : -2
    }, $set : {
      name : "Asif"
    }
  },{
    returnOriginal : false
  }).then((result)=>{
    console.log(JSON.stringify(result, undefined, 2));
  });

  // db.close();
});
