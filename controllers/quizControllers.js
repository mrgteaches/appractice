const db = require("../models");

module.exports = {
  
  findById: function(req, res) {
    db.Quizzes
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  
  findQuizzes: function(req, res) {
      db.Quizzes
      .find({})
      .then(dbModel => { 
          console.log(dbModel);
          res.json(dbModel)})
      .catch(err => res.status(422).json(err));
  }
  
};