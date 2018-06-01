const User = require('./mongo').user;

module.exports = {
  create: function create (user) {
    return new Promise((resolve, reject) => {
      var userSave = new User(user);
      userSave.save((err) => {
        if(err) return reject(err);
        resolve(true);
      })
    })
  },
  find(phone, callback) {
    return new Promise((resolve, reject) => {
      User.find({phone}, (err, docs) =>{
        if(err) return reject(err);
        resolve(docs);
      })
    })
  }
}