const {ObjectID} = require('mongodb');
const jwt = require('jsonwebtoken');

const {Todo} = require('./../../models/todo');
const {User} = require('./../../models/user');

const userOneId = new ObjectID();
const userTwoId = new ObjectID();

const users =[{
  _id: userOneId,
  email: 'shuvo@example.com',
  password: 'userOnePass',
  tokens:[{
    access: 'auth',
    token: jwt.sign({_id:userOneId.toHexString(), access:'auth'},process.env.JWT_SECRET ).toString()
  }]
},{
  _id: userTwoId,
  email: 'shoaib@example.com',
  password: 'userTwoPass',
  tokens:[{
    access: 'auth',
    token: jwt.sign({_id:userTwoId.toHexString(), access:'auth'},process.env.JWT_SECRET ).toString()
  }]
}];

const todos = [{
  _id: new ObjectID(),
  text: 'First test todo',
  _creator: userOneId
},{
  _id: new ObjectID(),
  text: 'Second test todo',
  completed : true,
  completedAt : 345,
  _creator: userTwoId
}];

const populateTodos = (done) => {
  Todo.remove({}).then(() => {
    return Todo.insertMany(todos);
  }).then(() => done());
};

const populateUsers = (done) => {
  User.remove({}).then(()=>{
    //insert many not going to call the pre 'save' middleware in User models
    //so the two user objects have to be saved seperately
    let userOne = new User(users[0]).save();
    let userTwo = new User(users[1]).save();
    return Promise.all([userOne, userTwo]);
  }).then(()=>done());
};

module.exports = {todos, populateTodos, users, populateUsers};
