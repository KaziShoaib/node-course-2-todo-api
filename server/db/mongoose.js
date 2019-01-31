let mongoose = require('mongoose');
mongoose.Promise = global.Promise;
//let localDB = 'mongodb://localhost:27017/TodoApp';

//this is a sample url of db created in mongo atlas
//to connect another db the new db name should be where 'node-todo-api' is
//the first 'hello' is name of user in the cluster
//the second 'hello123' is the password for user
//after creating the app on heroku
//the varibles MONGODB_URI and MONGOLAB_URI have to be set from the settings page of
//the app in the config vars section
//let cloudDB = "mongodb+srv://hello:hello123@cluster0-wyss7.mongodb.net/node-todo-api?retryWrites=true"

//mongoose.connect(process.env.MONGODB_URI||process.env.MONGOLAB_URI||localDB);
mongoose.connect(process.env.MONGODB_URI);
module.exports = {mongoose};
