const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/apbiologydb"
);

const quizzes = [
    {
        questions: [
            {
                question: "This is question number 1 for quiz 1",
                answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
                correctAnswer: 1
            },//end of question
            {
                question: "This is question number 2 for quiz 1",
                answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
                correctAnswer: 1
            },//end of question 
            {
                question: "This is question number 3 for quiz 1",
                answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
                correctAnswer: 1
            },//end of question 
            {
                question: "This is question number 4 for quiz 1",
                answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
                correctAnswer: 1
            },//end of question 
            {
                question: "This is question number 5 for quiz 1",
                answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
                correctAnswer: 1
            },//end of question 
            {
                question: "This is question number 6 for quiz 1",
                answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
                correctAnswer: 1
            },//end of question 
            {
                question: "This is question number 7 for quiz 1",
                answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
                correctAnswer: 1
            },//end of question 
            {
                question: "This is question number 8 for quiz 1",
                answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
                correctAnswer: 1
            },//end of question 
            {
                question: "This is question number 9 for quiz 1",
                answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
                correctAnswer: 1
            },//end of question 
            {
                question: "This is question number 10 for quiz 1",
                answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
                correctAnswer: 1
            },//end of last question 
        ]//end of array of questions for quiz 1
    },//end of quiz 1 object
    {
        questions: [
            {
                question: "This is question number 1 for quiz 2",
                answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
                correctAnswer: 1
            },//end of question
            {
                question: "This is question number 2 for quiz 2",
                answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
                correctAnswer: 1
            },//end of question 
            {
                question: "This is question number 3 for quiz 2",
                answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
                correctAnswer: 1
            },//end of question 
            {
                question: "This is question number 4 for quiz 2",
                answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
                correctAnswer: 1
            },//end of question 
            {
                question: "This is question number 5 for quiz 2",
                answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
                correctAnswer: 1
            },//end of question 
            {
                question: "This is question number 6 for quiz 2",
                answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
                correctAnswer: 1
            },//end of question 
            {
                question: "This is question number 7 for quiz 2",
                answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
                correctAnswer: 1
            },//end of question 
            {
                question: "This is question number 8 for quiz 2",
                answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
                correctAnswer: 1
            },//end of question 
            {
                question: "This is question number 9 for quiz 2",
                answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
                correctAnswer: 1
            },//end of question 
            {
                question: "This is question number 10 for quiz 2",
                answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
                correctAnswer: 1
            },//end of last question 
        ]//end of array of questions for quiz 2
    },//end of quiz 2 object
    {
        questions: [
            {
                question: "This is question number 1 for quiz 3",
                answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
                correctAnswer: 1
            },//end of question
            {
                question: "This is question number 2 for quiz 3",
                answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
                correctAnswer: 1
            },//end of question 
            {
                question: "This is question number 3 for quiz 3",
                answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
                correctAnswer: 1
            },//end of question 
            {
                question: "This is question number 4 for quiz 3",
                answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
                correctAnswer: 1
            },//end of question 
            {
                question: "This is question number 5 for quiz 3",
                answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
                correctAnswer: 1
            },//end of question 
            {
                question: "This is question number 6 for quiz 3",
                answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
                correctAnswer: 1
            },//end of question 
            {
                question: "This is question number 7 for quiz 3",
                answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
                correctAnswer: 1
            },//end of question 
            {
                question: "This is question number 8 for quiz 3",
                answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
                correctAnswer: 1
            },//end of question 
            {
                question: "This is question number 9 for quiz 3",
                answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
                correctAnswer: 1
            },//end of question 
            {
                question: "This is question number 10 for quiz 3",
                answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
                correctAnswer: 1
            },//end of last question 
        ]//end of array of questions for quiz 3
    },//end of quiz 3 object
    {
        questions: [
            {
                question: "This is question number 1 for quiz 4",
                answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
                correctAnswer: 1
            },//end of question
            {
                question: "This is question number 2 for quiz 4",
                answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
                correctAnswer: 1
            },//end of question 
            {
                question: "This is question number 3 for quiz 4",
                answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
                correctAnswer: 1
            },//end of question 
            {
                question: "This is question number 4 for quiz 4",
                answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
                correctAnswer: 1
            },//end of question 
            {
                question: "This is question number 5 for quiz 4",
                answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
                correctAnswer: 1
            },//end of question 
            {
                question: "This is question number 6 for quiz 4",
                answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
                correctAnswer: 1
            },//end of question 
            {
                question: "This is question number 7 for quiz 4",
                answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
                correctAnswer: 1
            },//end of question 
            {
                question: "This is question number 8 for quiz 4",
                answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
                correctAnswer: 1
            },//end of question 
            {
                question: "This is question number 9 for quiz 4",
                answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
                correctAnswer: 1
            },//end of question 
            {
                question: "This is question number 10 for quiz 4",
                answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
                correctAnswer: 1
            },//end of last question 
        ]//end of array of questions for quiz 4
    },//end of quiz 4 object
    {
        questions: [
            {
                question: "This is question number 1 for quiz 5",
                answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
                correctAnswer: 1
            },//end of question
            {
                question: "This is question number 2 for quiz 5",
                answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
                correctAnswer: 1
            },//end of question 
            {
                question: "This is question number 3 for quiz 5",
                answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
                correctAnswer: 1
            },//end of question 
            {
                question: "This is question number 4 for quiz 5",
                answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
                correctAnswer: 1
            },//end of question 
            {
                question: "This is question number 5 for quiz 5",
                answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
                correctAnswer: 1
            },//end of question 
            {
                question: "This is question number 6 for quiz 5",
                answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
                correctAnswer: 1
            },//end of question 
            {
                question: "This is question number 7 for quiz 5",
                answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
                correctAnswer: 1
            },//end of question 
            {
                question: "This is question number 8 for quiz 5",
                answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
                correctAnswer: 1
            },//end of question 
            {
                question: "This is question number 9 for quiz 5",
                answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
                correctAnswer: 1
            },//end of question 
            {
                question: "This is question number 10 for quiz 5",
                answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
                correctAnswer: 1
            },//end of last question 
        ]//end of array of questions for quiz 5
    },//end of quiz 5 object
    {
        questions: [
            {
                question: "This is question number 1 for quiz 6",
                answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
                correctAnswer: 1
            },//end of question
            {
                question: "This is question number 2 for quiz 6",
                answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
                correctAnswer: 1
            },//end of question 
            {
                question: "This is question number 3 for quiz 6",
                answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
                correctAnswer: 1
            },//end of question 
            {
                question: "This is question number 4 for quiz 6",
                answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
                correctAnswer: 1
            },//end of question 
            {
                question: "This is question number 5 for quiz 6",
                answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
                correctAnswer: 1
            },//end of question 
            {
                question: "This is question number 6 for quiz 6",
                answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
                correctAnswer: 1
            },//end of question 
            {
                question: "This is question number 7 for quiz 6",
                answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
                correctAnswer: 1
            },//end of question 
            {
                question: "This is question number 8 for quiz 6",
                answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
                correctAnswer: 1
            },//end of question 
            {
                question: "This is question number 9 for quiz 6",
                answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
                correctAnswer: 1
            },//end of question 
            {
                question: "This is question number 10 for quiz 6",
                answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
                correctAnswer: 1
            },//end of last question 
        ]//end of array of questions for quiz 6
    },//end of quiz 6 object
    {
        questions: [
            {
                question: "This is question number 1 for quiz 7",
                answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
                correctAnswer: 1
            },//end of question
            {
                question: "This is question number 2 for quiz 7",
                answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
                correctAnswer: 1
            },//end of question 
            {
                question: "This is question number 3 for quiz 7",
                answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
                correctAnswer: 1
            },//end of question 
            {
                question: "This is question number 4 for quiz 7",
                answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
                correctAnswer: 1
            },//end of question 
            {
                question: "This is question number 5 for quiz 7",
                answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
                correctAnswer: 1
            },//end of question 
            {
                question: "This is question number 6 for quiz 7",
                answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
                correctAnswer: 1
            },//end of question 
            {
                question: "This is question number 7 for quiz 7",
                answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
                correctAnswer: 1
            },//end of question 
            {
                question: "This is question number 8 for quiz 7",
                answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
                correctAnswer: 1
            },//end of question 
            {
                question: "This is question number 9 for quiz 7",
                answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
                correctAnswer: 1
            },//end of question 
            {
                question: "This is question number 10 for quiz 7",
                answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
                correctAnswer: 1
            },//end of last question 
        ]//end of array of questions for quiz 7
    },//end of quiz 7 object
    {
        questions: [
            {
                question: "This is question number 1 for quiz 8",
                answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
                correctAnswer: 1
            },//end of question
            {
                question: "This is question number 2 for quiz 8",
                answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
                correctAnswer: 1
            },//end of question 
            {
                question: "This is question number 3 for quiz 8",
                answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
                correctAnswer: 1
            },//end of question 
            {
                question: "This is question number 4 for quiz 8",
                answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
                correctAnswer: 1
            },//end of question 
            {
                question: "This is question number 5 for quiz 8",
                answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
                correctAnswer: 1
            },//end of question 
            {
                question: "This is question number 6 for quiz 8",
                answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
                correctAnswer: 1
            },//end of question 
            {
                question: "This is question number 7 for quiz 8",
                answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
                correctAnswer: 1
            },//end of question 
            {
                question: "This is question number 8 for quiz 8",
                answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
                correctAnswer: 1
            },//end of question 
            {
                question: "This is question number 9 for quiz 8",
                answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
                correctAnswer: 1
            },//end of question 
            {
                question: "This is question number 10 for quiz 8",
                answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
                correctAnswer: 1
            },//end of last question 
        ]//end of array of questions for quiz 8
    },//end of quiz 8 object
    {
        questions: [
            {
                question: "This is question number 1 for quiz 9",
                answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
                correctAnswer: 1
            },//end of question
            {
                question: "This is question number 2 for quiz 9",
                answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
                correctAnswer: 1
            },//end of question 
            {
                question: "This is question number 3 for quiz 9",
                answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
                correctAnswer: 1
            },//end of question 
            {
                question: "This is question number 4 for quiz 9",
                answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
                correctAnswer: 1
            },//end of question 
            {
                question: "This is question number 5 for quiz 9",
                answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
                correctAnswer: 1
            },//end of question 
            {
                question: "This is question number 6 for quiz 9",
                answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
                correctAnswer: 1
            },//end of question 
            {
                question: "This is question number 7 for quiz 9",
                answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
                correctAnswer: 1
            },//end of question 
            {
                question: "This is question number 8 for quiz 9",
                answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
                correctAnswer: 1
            },//end of question 
            {
                question: "This is question number 9 for quiz 9",
                answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
                correctAnswer: 1
            },//end of question 
            {
                question: "This is question number 10 for quiz 9",
                answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
                correctAnswer: 1
            },//end of last question 
        ]//end of array of questions for quiz 9
    },//end of quiz 9 object
    {
        questions: [
            {
                question: "This is question number 1 for quiz 10",
                answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
                correctAnswer: 1
            },//end of question
            {
                question: "This is question number 2 for quiz 10",
                answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
                correctAnswer: 1
            },//end of question 
            {
                question: "This is question number 3 for quiz 10",
                answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
                correctAnswer: 1
            },//end of question 
            {
                question: "This is question number 4 for quiz 10",
                answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
                correctAnswer: 1
            },//end of question 
            {
                question: "This is question number 5 for quiz 10",
                answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
                correctAnswer: 1
            },//end of question 
            {
                question: "This is question number 6 for quiz 10",
                answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
                correctAnswer: 1
            },//end of question 
            {
                question: "This is question number 7 for quiz 10",
                answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
                correctAnswer: 1
            },//end of question 
            {
                question: "This is question number 8 for quiz 10",
                answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
                correctAnswer: 1
            },//end of question 
            {
                question: "This is question number 9 for quiz 10",
                answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
                correctAnswer: 1
            },//end of question 
            {
                question: "This is question number 10 for quiz 10",
                answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
                correctAnswer: 1
            },//end of last question 
        ]//end of array of questions for quiz 10
    }//end of quiz 10 object

]//end of array of quiz objects


db.Quizzes
    .remove({})
    .then(() => db.Quizzes.collection.insertMany(quizzes))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });