const Article = require('./mongo').article;

module.exports = {
  create: function create (article) {
    return new Promise((resolve, reject) => {
      var articleSave = new Article(article);
      articleSave.save((err) => {
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