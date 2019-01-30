let mongoose = require('mongoose');
mongoose.Promise = global.Promise;
let localDB = 'mongodb://localhost:27017/TodoApp';
//let cloudDB = "mongodb://hello:hello123@ds037283.mlab.com:37283/todo_apps_db";
//let cloudDB = "mongodb+srv://hello:hello123@cluster0-wyss7.mongodb.net/node-todo-api?retryWrites=true"
//let cloudDB = "mongodb://heroku-node-todo-api:heroku123@ds037283.mlab.com:37283/todo_apps_db?authSource=todo_apps_db&w=1";
mongoose.connect(process.env.MONGODB_URI||process.env.MONGOLAB_URI||localDB);
//mongoose.connect(cloudDB);
//mongoose.connect(localDB,  {useNewUrlParser: true});
//console.log(process.env.MONGOLAB_URI);
//console.log(process.env.MONGODB_URI);
module.exports = {mongoose};
