const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const scoresSchema = new Schema({
  quizNumber: { type: String, required: true },
  percentage: { type: Number},
 
});

const Scores = mongoose.model("Scores", scoresSchema);

module.exports = Scores;