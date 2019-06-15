const db = require("../models");

module.exports = {
  
  findById: function(req, res) {
    db.Quizzes
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  
  findQuiz1: function(req, res) {
      db.Quizzes
      .find({$arrayElemAt: [0]})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
  
};