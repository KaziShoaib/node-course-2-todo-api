//const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
  if(err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('connected to MongoDB server');

  //delete many
  // db.collection('Todos').deleteMany({text : 'Eat lunch'}).then((result)=>{
  //   console.log(result);
  // });

  //delete one
  // db.collection('Todos').deleteOne({text : 'eat lunch'}).then((result)=>{
  //   console.log(result);
  // });

  //finde one and delete
  // db.collection('Todos').findOneAndDelete({completed : false}).then((result)=>{
  //   console.log(result);
  // });

  // db.collection('Users').deleteMany({name : 'Shoaib'}).then((result)=>{
  //   console.log(result);
  // });

  // db.collection('Users').findOneAndDelete({_id: 123}).then((result)=>{
  //   console.log(result);
  // });

  db.collection('Users').findOneAndDelete({_id: new ObjectID("5c4f1119c2d51207ecf3f396")}).then((result)=>{
    console.log(result);
  });
  // db.close();
});
