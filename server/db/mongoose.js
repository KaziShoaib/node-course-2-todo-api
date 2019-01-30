let mongoose = require('mongoose');

mongoose.Promise = global.Promise;
let localDB = 'mongodb://localhost:27017/TodoApp';
let cloudDB = 'mongodb://KaziShoaib:_q91kt19q@ds037283.mlab.com:37283/todo_apps_db'
mongoose.connect(cloudDB);

module.exports = {mongoose};
