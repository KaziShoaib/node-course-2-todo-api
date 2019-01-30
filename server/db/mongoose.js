let mongoose = require('mongoose');
mongoose.Promise = global.Promise;
let localDB = 'mongodb://localhost:27017/TodoApp';
let cloudDB = 'mongodb://heroku-node-todo-api:heroku123@ds037283.mlab.com:37283/todo_apps_db'

mongoose.connect(process.env.MONGODB_URI||process.env.MONGOLAB_URI||localDB);
//mongoose.connect(cloudDB);
//console.log(process.env.MONGOLAB_URI);
//console.log(process.env.MONGODB_URI);
module.exports = {mongoose};
