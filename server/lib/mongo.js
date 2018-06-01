const mongoose = require('mongoose');

let env = process.env.NODE_ENV;
console.log(env);
mongoose.connect(`mongodb://adminUser:Qiannaijia-11@120.77.178.106:27017/${env == 'dev' ? 'test_Database' : 'Database'}?authSource=admin`);
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