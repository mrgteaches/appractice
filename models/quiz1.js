const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const quiz1Schema = new Schema({
  question: { type: String, required: true },
  answer1: { type: String, required: true },
  answer2: { type: String, required: true },
  answer3: { type: String, required: true },
  answer4: { type: String, required: true }, 
});

const Quiz1 = mongoose.model("Quiz1", quiz1Schema);

module.exports = Quiz1;