const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/apbiologydb"
);

const quizzes = [
    {
        quizNo: "1",
        taken: "90%",
        questions: [
            {
                question: "This is question number 1 for quiz 1",
                answers:  [
                    {answer: "Answer 1", value: "1"}, 
                    {answer: "Answer 2", value: "2"}, 
                    {answer: "Answer 3", value: "3"}, 
                    {answer: "Answer 4", value: "4"}
                ],
                correctAnswer: "Answer 1"                
            },//end of question
            {
                question: "This is question number 2 for quiz 1",
                answers: [ 
                    {answer: "Answer 1", value: "1"}, 
                    {answer: "Answer 2", value: "2"}, 
                    {answer: "Answer 3", value: "3"}, 
                    {answer: "Answer 4", value: "4"}
            ],
                correctAnswer: "Answer 1"
            },//end of question 
            {
                question: "This is question number 3 for quiz 1",
                answers: [
                    {answer: "Answer 1", value: "1"}, 
                    {answer: "Answer 2", value: "2"}, 
                    {answer: "Answer 3", value: "3"}, 
                    {answer: "Answer 4", value: "4"}
                ],
                correctAnswer: "Answer 1"
            },//end of question 
            {
                question: "This is question number 4 for quiz 1",
                answers: [
                    {answer: "Answer 1", value: "1"}, 
                    {answer: "Answer 2", value: "2"}, 
                    {answer: "Answer 3", value: "3"}, 
                    {answer: "Answer 4", value: "4"}
                ],
                correctAnswer: "Answer 1"
            },//end of question 
            {
                question: "This is question number 5 for quiz 1",
                answers: [
                    {answer: "Answer 1", value: "1"}, 
                    {answer: "Answer 2", value: "2"}, 
                    {answer: "Answer 3", value: "3"}, 
                    {answer: "Answer 4", value: "4"}
                ],
                correctAnswer: "Answer 1"
            },//end of question 
            {
                question: "This is question number 6 for quiz 1",
                answers: [
                    {answer: "Answer 1", value: "1"}, 
                    {answer: "Answer 2", value: "2"}, 
                    {answer: "Answer 3", value: "3"}, 
                    {answer: "Answer 4", value: "4"}
                ],
                correctAnswer: "Answer 1"
            },//end of question 
            {
                question: "This is question number 7 for quiz 1",
                answers: [
                    {answer: "Answer 1", value: "1"}, 
                    {answer: "Answer 2", value: "2"}, 
                    {answer: "Answer 3", value: "3"}, 
                    {answer: "Answer 4", value: "4"}
                ],
                correctAnswer: "Answer 1"
            },//end of question 
            {
                question: "This is question number 8 for quiz 1",
                answers: [
                    {answer: "Answer 1", value: "1"}, 
                    {answer: "Answer 2", value: "2"}, 
                    {answer: "Answer 3", value: "3"}, 
                    {answer: "Answer 4", value: "4"}
                ],
                correctAnswer: "Answer 1"
            },//end of question 
            {
                question: "This is question number 9 for quiz 1",
                answers: [
                    {answer: "Answer 1", value: "1"}, 
                    {answer: "Answer 2", value: "2"}, 
                    {answer: "Answer 3", value: "3"}, 
                    {answer: "Answer 4", value: "4"}
                ],
                correctAnswer: "Answer 1"
            },//end of question 
            {
                question: "This is question number 10 for quiz 1",
                answers: [
                    {answer: "Answer 1", value: "1"}, 
                    {answer: "Answer 2", value: "2"}, 
                    {answer: "Answer 3", value: "3"}, 
                    {answer: "Answer 4", value: "4"}
                ],
                correctAnswer: "Answer 1"
            },//end of last question 
        ]//end of array of questions for quiz 1
    },//end of quiz 1 object
    {
        quizNo: "2",
        taken: "Untaken",
        questions: [
            {
                question: "This is question number 1 for quiz 2",
                answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
                correctAnswer: "Answer 1"
            },//end of question
            {
                question: "This is question number 2 for quiz 2",
                answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
                correctAnswer: "Answer 1"
            },//end of question 
            {
                question: "This is question number 3 for quiz 2",
                answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
                correctAnswer: "Answer 1"
            },//end of question 
            {
                question: "This is question number 4 for quiz 2",
                answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
                correctAnswer: "Answer 1"
            },//end of question 
            {
                question: "This is question number 5 for quiz 2",
                answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
                correctAnswer: "Answer 1"
            },//end of question 
            {
                question: "This is question number 6 for quiz 2",
                answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
                correctAnswer: "Answer 1"
            },//end of question 
            {
                question: "This is question number 7 for quiz 2",
                answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
                correctAnswer: "Answer 1"
            },//end of question 
            {
                question: "This is question number 8 for quiz 2",
                answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
                correctAnswer: "Answer 1"
            },//end of question 
            {
                question: "This is question number 9 for quiz 2",
                answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
                correctAnswer: "Answer 1"
            },//end of question 
            {
                question: "This is question number 10 for quiz 2",
                answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
                correctAnswer: "Answer 1"
            },//end of last question 
        ]//end of array of questions for quiz 2
    },//end of quiz 2 object
    {
        quizNo: "3",
        taken: "Untaken",
        questions: [
            {
                question: "This is question number 1 for quiz 3",
                answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
                correctAnswer: "Answer 1"
            },//end of question
            {
                question: "This is question number 2 for quiz 3",
                answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
                correctAnswer: "Answer 1"
            },//end of question 
            {
                question: "This is question number 3 for quiz 3",
                answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
                correctAnswer: "Answer 1"
            },//end of question 
            {
                question: "This is question number 4 for quiz 3",
                answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
                correctAnswer: "Answer 1"
            },//end of question 
            {
                question: "This is question number 5 for quiz 3",
                answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
                correctAnswer: "Answer 1"
            },//end of question 
            {
                question: "This is question number 6 for quiz 3",
                answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
                correctAnswer: "Answer 1"
            },//end of question 
            {
                question: "This is question number 7 for quiz 3",
                answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
                correctAnswer: "Answer 1"
            },//end of question 
            {
                question: "This is question number 8 for quiz 3",
                answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
                correctAnswer: "Answer 1"
            },//end of question 
            {
                question: "This is question number 9 for quiz 3",
                answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
                correctAnswer: "Answer 1"
            },//end of question 
            {
                question: "This is question number 10 for quiz 3",
                answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
                correctAnswer: "Answer 1"
            },//end of last question 
        ]//end of array of questions for quiz 3
    },//end of quiz 3 object
    {
        quizNo: "4",
        taken: "Untaken",
        questions: [
            {
                question: "This is question number 1 for quiz 4",
                answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
                correctAnswer: "Answer 1"
            },//end of question
            {
                question: "This is question number 2 for quiz 4",
                answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
                correctAnswer: "Answer 1"
            },//end of question 
            {
                question: "This is question number 3 for quiz 4",
                answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
                correctAnswer: "Answer 1"
            },//end of question 
            {
                question: "This is question number 4 for quiz 4",
                answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
                correctAnswer: "Answer 1"
            },//end of question 
            {
                question: "This is question number 5 for quiz 4",
                answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
                correctAnswer: "Answer 1"
            },//end of question 
            {
                question: "This is question number 6 for quiz 4",
                answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
                correctAnswer: "Answer 1"
            },//end of question 
            {
                question: "This is question number 7 for quiz 4",
                answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
                correctAnswer: "Answer 1"
            },//end of question 
            {
                question: "This is question number 8 for quiz 4",
                answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
                correctAnswer: "Answer 1"
            },//end of question 
            {
                question: "This is question number 9 for quiz 4",
                answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
                correctAnswer: "Answer 1"
            },//end of question 
            {
                question: "This is question number 10 for quiz 4",
                answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
                correctAnswer: "Answer 1"
            },//end of last question 
        ]//end of array of questions for quiz 4
    },//end of quiz 4 object
    {
        quizNo: "5",
        taken: "Untaken",
        questions: [
            {
                question: "This is question number 1 for quiz 5",
                answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
                correctAnswer: "Answer 1"
            },//end of question
            {
                question: "This is question number 2 for quiz 5",
                answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
                correctAnswer: "Answer 1"
            },//end of question 
            {
                question: "This is question number 3 for quiz 5",
                answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
                correctAnswer: "Answer 1"
            },//end of question 
            {
                question: "This is question number 4 for quiz 5",
                answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
                correctAnswer: "Answer 1"
            },//end of question 
            {
                question: "This is question number 5 for quiz 5",
                answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
                correctAnswer: "Answer 1"
            },//end of question 
            {
                question: "This is question number 6 for quiz 5",
                answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
                correctAnswer: "Answer 1"
            },//end of question 
            {
                question: "This is question number 7 for quiz 5",
                answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
                correctAnswer: "Answer 1"
            },//end of question 
            {
                question: "This is question number 8 for quiz 5",
                answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
                correctAnswer: "Answer 1"
            },//end of question 
            {
                question: "This is question number 9 for quiz 5",
                answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
                correctAnswer: "Answer 1"
            },//end of question 
            {
                question: "This is question number 10 for quiz 5",
                answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
                correctAnswer: "Answer 1"
            },//end of last question 
        ]//end of array of questions for quiz 5
    },//end of quiz 5 object
    {
        quizNo: "6",
        taken: "Untaken",
        questions: [
            {
                question: "This is question number 1 for quiz 6",
                answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
                correctAnswer: "Answer 1"
            },//end of question
            {
                question: "This is question number 2 for quiz 6",
                answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
                correctAnswer: "Answer 1"
            },//end of question 
            {
                question: "This is question number 3 for quiz 6",
                answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
                correctAnswer: "Answer 1"
            },//end of question 
            {
                question: "This is question number 4 for quiz 6",
                answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
                correctAnswer: "Answer 1"
            },//end of question 
            {
                question: "This is question number 5 for quiz 6",
                answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
                correctAnswer: "Answer 1"
            },//end of question 
            {
                question: "This is question number 6 for quiz 6",
                answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
                correctAnswer: "Answer 1"
            },//end of question 
            {
                question: "This is question number 7 for quiz 6",
                answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
                correctAnswer: "Answer 1"
            },//end of question 
            {
                question: "This is question number 8 for quiz 6",
                answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
                correctAnswer: "Answer 1"
            },//end of question 
            {
                question: "This is question number 9 for quiz 6",
                answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
                correctAnswer: "Answer 1"
            },//end of question 
            {
                question: "This is question number 10 for quiz 6",
                answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
                correctAnswer: "Answer 1"
            },//end of last question 
        ]//end of array of questions for quiz 6
    },//end of quiz 6 object
    {
        quizNo: "7",
        taken: "Untaken",
        questions: [
            {
                question: "This is question number 1 for quiz 7",
                answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
                correctAnswer: "Answer 1"
            },//end of question
            {
                question: "This is question number 2 for quiz 7",
                answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
                correctAnswer: "Answer 1"
            },//end of question 
            {
                question: "This is question number 3 for quiz 7",
                answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
                correctAnswer: "Answer 1"
            },//end of question 
            {
                question: "This is question number 4 for quiz 7",
                answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
                correctAnswer: "Answer 1"
            },//end of question 
            {
                question: "This is question number 5 for quiz 7",
                answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
                correctAnswer: "Answer 1"
            },//end of question 
            {
                question: "This is question number 6 for quiz 7",
                answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
                correctAnswer: "Answer 1"
            },//end of question 
            {
                question: "This is question number 7 for quiz 7",
                answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
                correctAnswer: "Answer 1"
            },//end of question 
            {
                question: "This is question number 8 for quiz 7",
                answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
                correctAnswer: "Answer 1"
            },//end of question 
            {
                question: "This is question number 9 for quiz 7",
                answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
                correctAnswer: "Answer 1"
            },//end of question 
            {
                question: "This is question number 10 for quiz 7",
                answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
                correctAnswer: "Answer 1"
            },//end of last question 
        ]//end of array of questions for quiz 7
    },//end of quiz 7 object
    {
        quizNo: "8",
        taken: "Untaken",
        questions: [
            {
                question: "This is question number 1 for quiz 8",
                answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
                correctAnswer: "Answer 1"
            },//end of question
            {
                question: "This is question number 2 for quiz 8",
                answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
                correctAnswer: "Answer 1"
            },//end of question 
            {
                question: "This is question number 3 for quiz 8",
                answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
                correctAnswer: "Answer 1"
            },//end of question 
            {
                question: "This is question number 4 for quiz 8",
                answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
                correctAnswer: "Answer 1"
            },//end of question 
            {
                question: "This is question number 5 for quiz 8",
                answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
                correctAnswer: "Answer 1"
            },//end of question 
            {
                question: "This is question number 6 for quiz 8",
                answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
                correctAnswer: "Answer 1"
            },//end of question 
            {
                question: "This is question number 7 for quiz 8",
                answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
                correctAnswer: "Answer 1"
            },//end of question 
            {
                question: "This is question number 8 for quiz 8",
                answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
                correctAnswer: "Answer 1"
            },//end of question 
            {
                question: "This is question number 9 for quiz 8",
                answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
                correctAnswer: "Answer 1"
            },//end of question 
            {
                question: "This is question number 10 for quiz 8",
                answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
                correctAnswer: "Answer 1"
            },//end of last question 
        ]//end of array of questions for quiz 8
    },//end of quiz 8 object
    {
        quizNo: "9",
        taken: "Untaken",
        questions: [
            {
                question: "This is question number 1 for quiz 9",
                answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
                correctAnswer: "Answer 1"
            },//end of question
            {
                question: "This is question number 2 for quiz 9",
                answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
                correctAnswer: "Answer 1"
            },//end of question 
            {
                question: "This is question number 3 for quiz 9",
                answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
                correctAnswer: "Answer 1"
            },//end of question 
            {
                question: "This is question number 4 for quiz 9",
                answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
                correctAnswer: "Answer 1"
            },//end of question 
            {
                question: "This is question number 5 for quiz 9",
                answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
                correctAnswer: "Answer 1"
            },//end of question 
            {
                question: "This is question number 6 for quiz 9",
                answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
                correctAnswer: "Answer 1"
            },//end of question 
            {
                question: "This is question number 7 for quiz 9",
                answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
                correctAnswer: "Answer 1"
            },//end of question 
            {
                question: "This is question number 8 for quiz 9",
                answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
                correctAnswer: "Answer 1"
            },//end of question 
            {
                question: "This is question number 9 for quiz 9",
                answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
                correctAnswer: "Answer 1"
            },//end of question 
            {
                question: "This is question number 10 for quiz 9",
                answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
                correctAnswer: "Answer 1"
            },//end of last question 
        ]//end of array of questions for quiz 9
    },//end of quiz 9 object
    {
        quizNo: "10",
        taken: "Untaken",
        questions: [
            {
                question: "This is question number 1 for quiz 10",
                answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
                correctAnswer: "Answer 1"
            },//end of question
            {
                question: "This is question number 2 for quiz 10",
                answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
                correctAnswer: "Answer 1"
            },//end of question 
            {
                question: "This is question number 3 for quiz 10",
                answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
                correctAnswer: "Answer 1"
            },//end of question 
            {
                question: "This is question number 4 for quiz 10",
                answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
                correctAnswer: "Answer 1"
            },//end of question 
            {
                question: "This is question number 5 for quiz 10",
                answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
                correctAnswer: "Answer 1"
            },//end of question 
            {
                question: "This is question number 6 for quiz 10",
                answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
                correctAnswer: "Answer 1"
            },//end of question 
            {
                question: "This is question number 7 for quiz 10",
                answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
                correctAnswer: "Answer 1"
            },//end of question 
            {
                question: "This is question number 8 for quiz 10",
                answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
                correctAnswer: "Answer 1"
            },//end of question 
            {
                question: "This is question number 9 for quiz 10",
                answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
                correctAnswer: "Answer 1"
            },//end of question 
            {
                question: "This is question number 10 for quiz 10",
                answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
                correctAnswer: "Answer 1"
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