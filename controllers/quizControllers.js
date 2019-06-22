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
          res.json(dbModel)})
      .catch(err => res.status(422).json(err));
  },

  postScore: function(req, res) {  
      db.Quizzes
      .findOneAndUpdate({ _id: req.params.id }, req.body, {upsert: true})  
      .then(dbModel => {        
        res.json(dbModel)
    })
    .catch(err => res.status(422).json(err));
  }

//   updateCorrect: function(req, res) {
//       db.Quizzes
//       .findOneAndUpdate()
//       .then(dbModel => {        
//         res.json(dbModel)
//     })
//     .catch(err => res.status(422).json(err));
//   }
  
};