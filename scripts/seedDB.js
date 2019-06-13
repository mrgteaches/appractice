const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/apbiologydb"
  );

const quiz1Seed = [
  {
    question: "Quiz 1 Question 1",
    answer1: "Quiz 1 Question 1 Correct Answer",
    answer2: "Quiz 1 Question 1 Answer 2",
    answer3: "Quiz 1 Question 1 Answer 3",
    answer4: "Quiz 1 Question 1 Answer 4"
  },
  {
    question: "Quiz 1 Question 2",
    answer1: "Quiz 1 Question 2 Correct Answer",
    answer2: "Quiz 1 Question 2 Answer 2",
    answer3: "Quiz 1 Question 2 Answer 3",
    answer4: "Quiz 1 Question 2 Answer 4"    
  },
  {
    question: "Quiz 1 Question 3",
    answer1: "Quiz 1 Question 3 Correct Answer",
    answer2: "Quiz 1 Question 3 Answer 2",
    answer3: "Quiz 1 Question 3 Answer 3",
    answer4: "Quiz 1 Question 3 Answer 4"    
  },
  {
    question: "Quiz 1 Question 4",
    answer1: "Quiz 1 Question 4 Correct Answer",
    answer2: "Quiz 1 Question 4 Answer 2",
    answer3: "Quiz 1 Question 4 Answer 3",
    answer4: "Quiz 1 Question 4 Answer 4"    
  },
  {
    question: "Quiz 1 Question 5",
    answer1: "Quiz 1 Question 5 Correct Answer",
    answer2: "Quiz 1 Question 5 Answer 2",
    answer3: "Quiz 1 Question 5 Answer 3",
    answer4: "Quiz 1 Question 5 Answer 4"    
  }
];

db.Quiz1
  .remove({})
  .then(() => db.Quiz1.collection.insertMany(quiz1Seed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });