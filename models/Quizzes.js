const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const quizSchema = new Schema({
  questions: Array
});

const Quizzes = mongoose.model("Quizzes", quizSchema);

module.exports = Quizzes;