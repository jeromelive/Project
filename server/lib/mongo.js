const mongoose = require('mongoose');
mongoose.connect('mongodb://adminUser:Qiannaijia-11@localhost:27017/Database?authSource=admin');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'coonnection error:'));
db.once('open', (callback) => {
  console.log("MongoDB Opened!");
})

var userSchema = mongoose.Schema({
  phone: {type: 'string'},
  password: {type: 'string'}
});

var userModel = mongoose.model('user', userSchema);
exports.user = userModel;

var articleSchema = mongoose.Schema({
  title: {type: 'string'},
  content: {type: 'string'}
});
var articleModel = mongoose.model('article', articleSchema);
exports.article = articleModel;