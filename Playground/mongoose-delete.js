const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');
//
// Todo.remove({}).then((results)=>{
//   console.log(results);
// });

// Todo.findByIdAndRemove('5c51b6f6da22c041ef35945e').then((doc)=>{
//   console.log(doc);
// });

Todo.findOneAndRemove({_id: new ObjectID('5c51b7beda22c041ef35949a')}).then((doc)=>{
  console.log(doc);
});
