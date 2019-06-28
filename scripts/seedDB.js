const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI ||
    // "mongodb://localhost/apbiologydb"
    "mongodb://mrg:jikodikipe8@ds157383.mlab.com:57383/heroku_lrkp4brv"
   
);

const quizzes = [
    {
        quizNo: "1",
        taken: "Untaken",
        questions: [
            {                
                questionId: "1",
                question: "This is question number 1 for quiz 1",
                answers:  [
                    {answer: "Answer 1", value: "1", id: "1.1"}, 
                    {answer: "Answer 2", value: "2", id: "1.2"}, 
                    {answer: "Answer 3", value: "3", id: "1.3"}, 
                    {answer: "Answer 4", value: "4", id: "1.4"}
                ],
                correctAnswer: "Answer 1"                           
            },//end of question
            {
                questionId: "2",
                question: "This is question number 2 for quiz 1",
                answers: [ 
                    {answer: "Answer 1", value: "1", id: "2.1"}, 
                    {answer: "Answer 2", value: "2", id: "2.2"}, 
                    {answer: "Answer 3", value: "3", id: "2.3"}, 
                    {answer: "Answer 4", value: "4", id: "2.4"}
            ],
                correctAnswer: "Answer 1"            
            },//end of question 
            {
                questionId: "3",
                question: "This is question number 3 for quiz 1",
                answers: [
                    {answer: "Answer 1", value: "1", id: "3.1"}, 
                    {answer: "Answer 2", value: "2", id: "3.2"}, 
                    {answer: "Answer 3", value: "3", id: "3.3"}, 
                    {answer: "Answer 4", value: "4", id: "3.4"}
                ],
                correctAnswer: "Answer 1"
            },//end of question 
            {
                questionId: "4",
                question: "This is question number 4 for quiz 1",
                answers: [
                    {answer: "Answer 1", value: "1", id: "4.1"}, 
                    {answer: "Answer 2", value: "2", id: "4.2"}, 
                    {answer: "Answer 3", value: "3", id: "4.3"}, 
                    {answer: "Answer 4", value: "4", id: "4.4"}
                ],
                correctAnswer: "Answer 1"
            },//end of question 
            {
                questionId: "5",
                question: "This is question number 5 for quiz 1",
                answers: [
                    {answer: "Answer 1", value: "1", id: "5.1"}, 
                    {answer: "Answer 2", value: "2", id: "5.2"}, 
                    {answer: "Answer 3", value: "3", id: "5.3"}, 
                    {answer: "Answer 4", value: "4", id: "5.4"}
                ],
                correctAnswer: "Answer 1"
            },//end of question 
            {
                questionId: "6",
                question: "This is question number 6 for quiz 1",
                answers: [
                    {answer: "Answer 1", value: "1", id: "6.1"}, 
                    {answer: "Answer 2", value: "2", id: "6.2"}, 
                    {answer: "Answer 3", value: "3", id: "6.3"}, 
                    {answer: "Answer 4", value: "4", id: "6.4"}
                ],
                correctAnswer: "Answer 1"
            },//end of question 
            {
                questionId: "7",
                question: "This is question number 7 for quiz 1",
                answers: [
                    {answer: "Answer 1", value: "1", id: "7.1"}, 
                    {answer: "Answer 2", value: "2", id: "7.2"}, 
                    {answer: "Answer 3", value: "3", id: "7.3"}, 
                    {answer: "Answer 4", value: "4", id: "7.4"}
                ],
                correctAnswer: "Answer 1"
            },//end of question 
            {
                questionId: "8",
                question: "This is question number 8 for quiz 1",
                answers: [
                    {answer: "Answer 1", value: "1", id: "8.1"}, 
                    {answer: "Answer 2", value: "2", id: "8.2"}, 
                    {answer: "Answer 3", value: "3", id: "8.3"}, 
                    {answer: "Answer 4", value: "4", id: "8.4"}
                ],
                correctAnswer: "Answer 1"
            },//end of question 
            {
                questionId: "9",
                question: "This is question number 9 for quiz 1",
                answers: [
                    {answer: "Answer 1", value: "1", id: "9.1"}, 
                    {answer: "Answer 2", value: "2", id: "9.2"}, 
                    {answer: "Answer 3", value: "3", id: "9.3"}, 
                    {answer: "Answer 4", value: "4", id: "9.4"}
                ],
                correctAnswer: "Answer 1"
            },//end of question 
            {
                questionId: "10",
                question: "This is question number 10 for quiz 1",
                answers: [
                    {answer: "Answer 1", value: "1", id: "10.1"}, 
                    {answer: "Answer 2", value: "2", id: "10.2"}, 
                    {answer: "Answer 3", value: "3", id: "10.3"}, 
                    {answer: "Answer 4", value: "4", id: "10.4"}
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
                questionId: "1",
                question: "This is question number 1 for quiz 2",
                answers: [
                    {answer: "Answer 1", value: "1", id: "1.1"}, 
                    {answer: "Answer 2", value: "2", id: "1.2"}, 
                    {answer: "Answer 3", value: "3", id: "1.3"}, 
                    {answer: "Answer 4", value: "4", id: "1.4"}
                ],
                correctAnswer: "Answer 1"
            },//end of question
            {
                questionId: "2",
                question: "This is question number 2 for quiz 2",
                answers: [
                    {answer: "Answer 1", value: "1", id: "2.1"}, 
                    {answer: "Answer 2", value: "2", id: "2.2"}, 
                    {answer: "Answer 3", value: "3", id: "2.3"}, 
                    {answer: "Answer 4", value: "4", id: "2.4"}
                ],
                correctAnswer: "Answer 1"
            },//end of question 
            {
                questionId: "3",
                question: "This is question number 3 for quiz 2",
                answers: [
                    {answer: "Answer 1", value: "1", id: "3.1"}, 
                    {answer: "Answer 2", value: "2", id: "3.2"}, 
                    {answer: "Answer 3", value: "3", id: "3.3"}, 
                    {answer: "Answer 4", value: "4", id: "3.4"}
                ],
                correctAnswer: "Answer 1"
            },//end of question 
            {
                questionId: "4",
                question: "This is question number 4 for quiz 2",
                answers: [
                    {answer: "Answer 1", value: "1", id: "4.1"}, 
                    {answer: "Answer 2", value: "2", id: "4.2"}, 
                    {answer: "Answer 3", value: "3", id: "4.3"}, 
                    {answer: "Answer 4", value: "4", id: "4.4"}
                ],
                correctAnswer: "Answer 1"
            },//end of question 
            {
                questionId: "5",
                question: "This is question number 5 for quiz 2",
                answers: [
                    {answer: "Answer 1", value: "1", id: "5.1"}, 
                    {answer: "Answer 2", value: "2", id: "5.2"}, 
                    {answer: "Answer 3", value: "3", id: "5.3"}, 
                    {answer: "Answer 4", value: "4", id: "5.4"}
                ],
                correctAnswer: "Answer 1"
            },//end of question 
            {
                questionId: "6",
                question: "This is question number 6 for quiz 2",
                answers: [
                    {answer: "Answer 1", value: "1", id: "6.1"}, 
                    {answer: "Answer 2", value: "2", id: "6.2"}, 
                    {answer: "Answer 3", value: "3", id: "6.3"}, 
                    {answer: "Answer 4", value: "4", id: "6.4"}
                ],
                correctAnswer: "Answer 1"
            },//end of question 
            {
                questionId: "7",
                question: "This is question number 7 for quiz 2",
                answers: [
                    {answer: "Answer 1", value: "1", id: "7.1"}, 
                    {answer: "Answer 2", value: "2", id: "7.2"}, 
                    {answer: "Answer 3", value: "3", id: "7.3"}, 
                    {answer: "Answer 4", value: "4", id: "7.4"}
                ],
                correctAnswer: "Answer 1"
            },//end of question 
            {
                questionId: "8",
                question: "This is question number 8 for quiz 2",
                answers: [
                    {answer: "Answer 1", value: "1", id: "8.1"}, 
                    {answer: "Answer 2", value: "2", id: "8.2"}, 
                    {answer: "Answer 3", value: "3", id: "8.3"}, 
                    {answer: "Answer 4", value: "4", id: "8.4"}
                ],
                correctAnswer: "Answer 1"
            },//end of question 
            {
                questionId: "9",
                question: "This is question number 9 for quiz 2",
                answers: [
                    {answer: "Answer 1", value: "1", id: "9.1"}, 
                    {answer: "Answer 2", value: "2", id: "9.2"}, 
                    {answer: "Answer 3", value: "3", id: "9.3"}, 
                    {answer: "Answer 4", value: "4", id: "9.4"}
                ],
                correctAnswer: "Answer 1"
            },//end of question 
            {
                questionId: "10",
                question: "This is question number 10 for quiz 2",
                answers: [
                    {answer: "Answer 1", value: "1", id: "10.1"}, 
                    {answer: "Answer 2", value: "2", id: "10.2"}, 
                    {answer: "Answer 3", value: "3", id: "10.3"}, 
                    {answer: "Answer 4", value: "4", id: "10.4"}
                ],
                correctAnswer: "Answer 1"
            },//end of last question 
        ]//end of array of questions for quiz 2
    },//end of quiz 2 object
    {
        quizNo: "3",
        taken: "Untaken",
        questions: [
            {
                questionId: "1",
                question: "This is question number 1 for quiz 3",
                answers: [
                    {answer: "Answer 1", value: "1", id: "1.1"}, 
                    {answer: "Answer 2", value: "2", id: "1.2"}, 
                    {answer: "Answer 3", value: "3", id: "1.3"}, 
                    {answer: "Answer 4", value: "4", id: "1.4"}
                ],
                correctAnswer: "Answer 1"
            },//end of question
            {
                questionId: "2",
                question: "This is question number 2 for quiz 3",
                answers: [
                    {answer: "Answer 1", value: "1", id: "2.1"}, 
                    {answer: "Answer 2", value: "2", id: "2.2"}, 
                    {answer: "Answer 3", value: "3", id: "2.3"}, 
                    {answer: "Answer 4", value: "4", id: "2.4"}
                ],
                correctAnswer: "Answer 1"
            },//end of question 
            {
                questionId: "3",
                question: "This is question number 3 for quiz 3",
                answers: [
                    {answer: "Answer 1", value: "1", id: "3.1"}, 
                    {answer: "Answer 2", value: "2", id: "3.2"}, 
                    {answer: "Answer 3", value: "3", id: "3.4"}, 
                    {answer: "Answer 4", value: "4", id: "3.5"}
                ],
                correctAnswer: "Answer 1"
            },//end of question 
            {
                questionId: "4",
                question: "This is question number 4 for quiz 3",
                answers: [
                    {answer: "Answer 1", value: "1", id: "4.1"}, 
                    {answer: "Answer 2", value: "2", id: "4.2"}, 
                    {answer: "Answer 3", value: "3", id: "4.3"}, 
                    {answer: "Answer 4", value: "4", id: "4.4"}
                ],
                correctAnswer: "Answer 1"
            },//end of question 
            {
                questionId: "5",
                question: "This is question number 5 for quiz 3",
                answers: [
                    {answer: "Answer 1", value: "1", id: "5.1"}, 
                    {answer: "Answer 2", value: "2", id: "5.2"}, 
                    {answer: "Answer 3", value: "3", id: "5.3"}, 
                    {answer: "Answer 4", value: "4", id: "5.4"}
                ],
                correctAnswer: "Answer 1"
            },//end of question 
            {
                questionId: "6",
                question: "This is question number 6 for quiz 3",
                answers: [
                    {answer: "Answer 1", value: "1", id: "6.1"}, 
                    {answer: "Answer 2", value: "2", id: "6.2"}, 
                    {answer: "Answer 3", value: "3", id: "6.3"}, 
                    {answer: "Answer 4", value: "4", id: "6.4"}
                ],
                correctAnswer: "Answer 1"
            },//end of question 
            {
                questionId: "7",
                question: "This is question number 7 for quiz 3",
                answers: [
                    {answer: "Answer 1", value: "1", id: "7.1"}, 
                    {answer: "Answer 2", value: "2", id: "7.2"}, 
                    {answer: "Answer 3", value: "3", id: "7.3"}, 
                    {answer: "Answer 4", value: "4", id: "7.4"}
                ],
                correctAnswer: "Answer 1"
            },//end of question 
            {
                questionId: "8",
                question: "This is question number 8 for quiz 3",
                answers: [
                    {answer: "Answer 1", value: "1", id: "8.1"}, 
                    {answer: "Answer 2", value: "2", id: "8.2"}, 
                    {answer: "Answer 3", value: "3", id: "8.3"}, 
                    {answer: "Answer 4", value: "4", id: "8.4"}
                ],
                correctAnswer: "Answer 1"
            },//end of question 
            {
                questionId: "9",
                question: "This is question number 9 for quiz 3",
                answers: [
                    {answer: "Answer 1", value: "1", id: "9.1"}, 
                    {answer: "Answer 2", value: "2", id: "9.2"}, 
                    {answer: "Answer 3", value: "3", id: "9.3"}, 
                    {answer: "Answer 4", value: "4", id: "9.4"}
                ],
                correctAnswer: "Answer 1"
            },//end of question 
            {
                questionId: "10",
                question: "This is question number 10 for quiz 3",
                answers: [
                    {answer: "Answer 1", value: "1", id: "10.1"}, 
                    {answer: "Answer 2", value: "2", id: "10.2"}, 
                    {answer: "Answer 3", value: "3", id: "10.3"}, 
                    {answer: "Answer 4", value: "4", id: "10.4"}
                ],
                correctAnswer: "Answer 1"
            },//end of last question 
        ]//end of array of questions for quiz 3
    },//end of quiz 3 object
    {
        quizNo: "4",
        taken: "Untaken",
        questions: [
            {
                questionId: "1",
                question: "This is question number 1 for quiz 4",
                answers: [ 
                    {answer: "Answer 1", value: "1"}, 
                    {answer: "Answer 2", value: "2"}, 
                    {answer: "Answer 3", value: "3"}, 
                    {answer: "Answer 4", value: "4"}
                ],
                correctAnswer: "Answer 1"
            },//end of question
            {
                questionId: "2",
                question: "This is question number 2 for quiz 4",
                answers: [
                    {answer: "Answer 1", value: "1"}, 
                    {answer: "Answer 2", value: "2"}, 
                    {answer: "Answer 3", value: "3"}, 
                    {answer: "Answer 4", value: "4"}
                ],
                correctAnswer: "Answer 1"
            },//end of question 
            {
                questionId: "3",
                question: "This is question number 3 for quiz 4",
                answers: [
                    {answer: "Answer 1", value: "1"}, 
                    {answer: "Answer 2", value: "2"}, 
                    {answer: "Answer 3", value: "3"}, 
                    {answer: "Answer 4", value: "4"}
                ],
                correctAnswer: "Answer 1"
            },//end of question 
            {
                questionId: "4",
                question: "This is question number 4 for quiz 4",
                answers: [
                    {answer: "Answer 1", value: "1"}, 
                    {answer: "Answer 2", value: "2"}, 
                    {answer: "Answer 3", value: "3"}, 
                    {answer: "Answer 4", value: "4"}
                ],
                correctAnswer: "Answer 1"
            },//end of question 
            {
                questionId: "5",
                question: "This is question number 5 for quiz 4",
                answers: [
                    {answer: "Answer 1", value: "1"}, 
                    {answer: "Answer 2", value: "2"}, 
                    {answer: "Answer 3", value: "3"}, 
                    {answer: "Answer 4", value: "4"}
                ],
                correctAnswer: "Answer 1"
            },//end of question 
            {
                questionId: "6",
                question: "This is question number 6 for quiz 4",
                answers: [
                    {answer: "Answer 1", value: "1"}, 
                    {answer: "Answer 2", value: "2"}, 
                    {answer: "Answer 3", value: "3"}, 
                    {answer: "Answer 4", value: "4"}
                ],
                correctAnswer: "Answer 1"
            },//end of question 
            {
                questionId: "7",
                question: "This is question number 7 for quiz 4",
                answers: [
                    {answer: "Answer 1", value: "1"}, 
                    {answer: "Answer 2", value: "2"}, 
                    {answer: "Answer 3", value: "3"}, 
                    {answer: "Answer 4", value: "4"}
                ],
                correctAnswer: "Answer 1"
            },//end of question 
            {
                questionId: "8",
                question: "This is question number 8 for quiz 4",
                answers: [
                    {answer: "Answer 1", value: "1"}, 
                    {answer: "Answer 2", value: "2"}, 
                    {answer: "Answer 3", value: "3"}, 
                    {answer: "Answer 4", value: "4"}
                ],
                correctAnswer: "Answer 1"
            },//end of question 
            {
                questionId: "9",
                question: "This is question number 9 for quiz 4",
                answers: [
                    {answer: "Answer 1", value: "1"}, 
                    {answer: "Answer 2", value: "2"}, 
                    {answer: "Answer 3", value: "3"}, 
                    {answer: "Answer 4", value: "4"}
                ],
                correctAnswer: "Answer 1"
            },//end of question 
            {
                questionId: "10",
                question: "This is question number 10 for quiz 4",
                answers: [
                    {answer: "Answer 1", value: "1"}, 
                    {answer: "Answer 2", value: "2"}, 
                    {answer: "Answer 3", value: "3"}, 
                    {answer: "Answer 4", value: "4"}
                ],
                correctAnswer: "Answer 1"
            },//end of last question 
        ]//end of array of questions for quiz 4
    },//end of quiz 4 object
    {
        quizNo: "5",
        taken: "Untaken",
        questions: [
            {
                questionId: "1",
                question: "This is question number 1 for quiz 5",
                answers: [
                    {answer: "Answer 1", value: "1"}, 
                    {answer: "Answer 2", value: "2"}, 
                    {answer: "Answer 3", value: "3"}, 
                    {answer: "Answer 4", value: "4"}
                ],
                correctAnswer: "Answer 1"
            },//end of question
            {
                questionId: "2",
                question: "This is question number 2 for quiz 5",
                answers: [
                    {answer: "Answer 1", value: "1"}, 
                    {answer: "Answer 2", value: "2"}, 
                    {answer: "Answer 3", value: "3"}, 
                    {answer: "Answer 4", value: "4"}
                ],
                correctAnswer: "Answer 1"
            },//end of question 
            {
                questionId: "3",
                question: "This is question number 3 for quiz 5",
                answers: [
                    {answer: "Answer 1", value: "1"}, 
                    {answer: "Answer 2", value: "2"}, 
                    {answer: "Answer 3", value: "3"}, 
                    {answer: "Answer 4", value: "4"}
                ],
                correctAnswer: "Answer 1"
            },//end of question 
            {
                questionId: "4",
                question: "This is question number 4 for quiz 5",
                answers: [
                    {answer: "Answer 1", value: "1"}, 
                    {answer: "Answer 2", value: "2"}, 
                    {answer: "Answer 3", value: "3"}, 
                    {answer: "Answer 4", value: "4"}
                ],
                correctAnswer: "Answer 1"
            },//end of question 
            {
                questionId: "5",
                question: "This is question number 5 for quiz 5",
                answers: [
                    {answer: "Answer 1", value: "1"}, 
                    {answer: "Answer 2", value: "2"}, 
                    {answer: "Answer 3", value: "3"}, 
                    {answer: "Answer 4", value: "4"}
                ],
                correctAnswer: "Answer 1"
            },//end of question 
            {
                questionId: "6",
                question: "This is question number 6 for quiz 5",
                answers: [
                    {answer: "Answer 1", value: "1"}, 
                    {answer: "Answer 2", value: "2"}, 
                    {answer: "Answer 3", value: "3"}, 
                    {answer: "Answer 4", value: "4"}
                ],
                correctAnswer: "Answer 1"
            },//end of question 
            {
                questionId: "7",
                question: "This is question number 7 for quiz 5",
                answers: [
                    {answer: "Answer 1", value: "1"}, 
                    {answer: "Answer 2", value: "2"}, 
                    {answer: "Answer 3", value: "3"}, 
                    {answer: "Answer 4", value: "4"}
                ],
                correctAnswer: "Answer 1"
            },//end of question 
            {
                questionId: "8",
                question: "This is question number 8 for quiz 5",
                answers: [
                    {answer: "Answer 1", value: "1"}, 
                    {answer: "Answer 2", value: "2"}, 
                    {answer: "Answer 3", value: "3"}, 
                    {answer: "Answer 4", value: "4"}
                ],
                correctAnswer: "Answer 1"
            },//end of question 
            {
                questionId: "9",
                question: "This is question number 9 for quiz 5",
                answers: [
                    {answer: "Answer 1", value: "1"}, 
                    {answer: "Answer 2", value: "2"}, 
                    {answer: "Answer 3", value: "3"}, 
                    {answer: "Answer 4", value: "4"}
                ],
                correctAnswer: "Answer 1"
            },//end of question 
            {
                questionId: "10",
                question: "This is question number 10 for quiz 5",
                answers: [
                    {answer: "Answer 1", value: "1"}, 
                    {answer: "Answer 2", value: "2"}, 
                    {answer: "Answer 3", value: "3"}, 
                    {answer: "Answer 4", value: "4"}
                ],
                correctAnswer: "Answer 1"
            },//end of last question 
        ]//end of array of questions for quiz 5
    },//end of quiz 5 object
    {
        quizNo: "6",
        taken: "Untaken",
        questions: [
            {
                questionId: "1",
                question: "This is question number 1 for quiz 6",
                answers: [
                    {answer: "Answer 1", value: "1"}, 
                    {answer: "Answer 2", value: "2"}, 
                    {answer: "Answer 3", value: "3"}, 
                    {answer: "Answer 4", value: "4"}
                ],
                correctAnswer: "Answer 1"
            },//end of question
            {
                questionId: "2",
                question: "This is question number 2 for quiz 6",
                answers: [
                    {answer: "Answer 1", value: "1"}, 
                    {answer: "Answer 2", value: "2"}, 
                    {answer: "Answer 3", value: "3"}, 
                    {answer: "Answer 4", value: "4"}
                ],
                correctAnswer: "Answer 1"
            },//end of question 
            {
                questionId: "3",
                question: "This is question number 3 for quiz 6",
                answers: [
                    {answer: "Answer 1", value: "1"}, 
                    {answer: "Answer 2", value: "2"}, 
                    {answer: "Answer 3", value: "3"}, 
                    {answer: "Answer 4", value: "4"}
                ],
                correctAnswer: "Answer 1"
            },//end of question 
            {
                questionId: "4",
                question: "This is question number 4 for quiz 6",
                answers: [
                    {answer: "Answer 1", value: "1"}, 
                    {answer: "Answer 2", value: "2"}, 
                    {answer: "Answer 3", value: "3"}, 
                    {answer: "Answer 4", value: "4"}
                ],
                correctAnswer: "Answer 1"
            },//end of question 
            {
                questionId: "5",
                question: "This is question number 5 for quiz 6",
                answers: [
                    {answer: "Answer 1", value: "1"}, 
                    {answer: "Answer 2", value: "2"}, 
                    {answer: "Answer 3", value: "3"}, 
                    {answer: "Answer 4", value: "4"}
                ],
                correctAnswer: "Answer 1"
            },//end of question 
            {
                questionId: "6",
                question: "This is question number 6 for quiz 6",
                answers: [
                    {answer: "Answer 1", value: "1"}, 
                    {answer: "Answer 2", value: "2"}, 
                    {answer: "Answer 3", value: "3"}, 
                    {answer: "Answer 4", value: "4"}
                ],
                correctAnswer: "Answer 1"
            },//end of question 
            {
                questionId: "7",
                question: "This is question number 7 for quiz 6",
                answers: [
                    {answer: "Answer 1", value: "1"}, 
                    {answer: "Answer 2", value: "2"}, 
                    {answer: "Answer 3", value: "3"}, 
                    {answer: "Answer 4", value: "4"}
                ],
                correctAnswer: "Answer 1"
            },//end of question 
            {
                questionId: "8",
                question: "This is question number 8 for quiz 6",
                answers: [
                    {answer: "Answer 1", value: "1"}, 
                    {answer: "Answer 2", value: "2"}, 
                    {answer: "Answer 3", value: "3"}, 
                    {answer: "Answer 4", value: "4"}
                ],
                correctAnswer: "Answer 1"
            },//end of question 
            {
                questionId: "9",
                question: "This is question number 9 for quiz 6",
                answers: [
                    {answer: "Answer 1", value: "1"}, 
                    {answer: "Answer 2", value: "2"}, 
                    {answer: "Answer 3", value: "3"}, 
                    {answer: "Answer 4", value: "4"}
                ],
                correctAnswer: "Answer 1"
            },//end of question 
            {
                questionId: "10",
                question: "This is question number 10 for quiz 6",
                answers: [
                    {answer: "Answer 1", value: "1"}, 
                    {answer: "Answer 2", value: "2"}, 
                    {answer: "Answer 3", value: "3"}, 
                    {answer: "Answer 4", value: "4"}
                ],
                correctAnswer: "Answer 1"
            },//end of last question 
        ]//end of array of questions for quiz 6
    },//end of quiz 6 object
    {
        quizNo: "7",
        taken: "Untaken",
        questions: [
            {
                questionId: "1",
                question: "This is question number 1 for quiz 7",
                answers: [
                    {answer: "Answer 1", value: "1"}, 
                    {answer: "Answer 2", value: "2"}, 
                    {answer: "Answer 3", value: "3"}, 
                    {answer: "Answer 4", value: "4"}
                ],
                correctAnswer: "Answer 1"
            },//end of question
            {
                questionId: "2",
                question: "This is question number 2 for quiz 7",
                answers: [
                    {answer: "Answer 1", value: "1"}, 
                    {answer: "Answer 2", value: "2"}, 
                    {answer: "Answer 3", value: "3"}, 
                    {answer: "Answer 4", value: "4"}
                ],
                correctAnswer: "Answer 1"
            },//end of question 
            {
                questionId: "3",
                question: "This is question number 3 for quiz 7",
                answers: [
                    {answer: "Answer 1", value: "1"}, 
                    {answer: "Answer 2", value: "2"}, 
                    {answer: "Answer 3", value: "3"}, 
                    {answer: "Answer 4", value: "4"}
                ],
                correctAnswer: "Answer 1"
            },//end of question 
            {
                questionId: "4",
                question: "This is question number 4 for quiz 7",
                answers: [
                    {answer: "Answer 1", value: "1"}, 
                    {answer: "Answer 2", value: "2"}, 
                    {answer: "Answer 3", value: "3"}, 
                    {answer: "Answer 4", value: "4"}
                ],
                correctAnswer: "Answer 1"
            },//end of question 
            {
                questionId: "5",
                question: "This is question number 5 for quiz 7",
                answers: [
                    {answer: "Answer 1", value: "1"}, 
                    {answer: "Answer 2", value: "2"}, 
                    {answer: "Answer 3", value: "3"}, 
                    {answer: "Answer 4", value: "4"}
                ],
                correctAnswer: "Answer 1"
            },//end of question 
            {
                questionId: "6",
                question: "This is question number 6 for quiz 7",
                answers: [
                    {answer: "Answer 1", value: "1"}, 
                    {answer: "Answer 2", value: "2"}, 
                    {answer: "Answer 3", value: "3"}, 
                    {answer: "Answer 4", value: "4"}
                ],
                correctAnswer: "Answer 1"
            },//end of question 
            {
                questionId: "7",
                question: "This is question number 7 for quiz 7",
                answers: [
                    {answer: "Answer 1", value: "1"}, 
                    {answer: "Answer 2", value: "2"}, 
                    {answer: "Answer 3", value: "3"}, 
                    {answer: "Answer 4", value: "4"}
                ],
                correctAnswer: "Answer 1"
            },//end of question 
            {
                questionId: "8",
                question: "This is question number 8 for quiz 7",
                answers: [
                    {answer: "Answer 1", value: "1"}, 
                    {answer: "Answer 2", value: "2"}, 
                    {answer: "Answer 3", value: "3"}, 
                    {answer: "Answer 4", value: "4"}
                ],
                correctAnswer: "Answer 1"
            },//end of question 
            {
                questionId: "9",
                question: "This is question number 9 for quiz 7",
                answers: [
                    {answer: "Answer 1", value: "1"}, 
                    {answer: "Answer 2", value: "2"}, 
                    {answer: "Answer 3", value: "3"}, 
                    {answer: "Answer 4", value: "4"}
                ],
                correctAnswer: "Answer 1"
            },//end of question 
            {
                questionId: "10",
                question: "This is question number 10 for quiz 7",
                answers: [
                    {answer: "Answer 1", value: "1"}, 
                    {answer: "Answer 2", value: "2"}, 
                    {answer: "Answer 3", value: "3"}, 
                    {answer: "Answer 4", value: "4"}
                ],
                correctAnswer: "Answer 1"
            },//end of last question 
        ]//end of array of questions for quiz 7
    },//end of quiz 7 object
    {
        quizNo: "8",
        taken: "Untaken",
        questions: [
            {
                questionId: "1",
                question: "This is question number 1 for quiz 8",
                answers: [
                    {answer: "Answer 1", value: "1"}, 
                    {answer: "Answer 2", value: "2"}, 
                    {answer: "Answer 3", value: "3"}, 
                    {answer: "Answer 4", value: "4"}
                ],
                correctAnswer: "Answer 1"
            },//end of question
            {
                questionId: "2",
                question: "This is question number 2 for quiz 8",
                answers: [
                    {answer: "Answer 1", value: "1"}, 
                    {answer: "Answer 2", value: "2"}, 
                    {answer: "Answer 3", value: "3"}, 
                    {answer: "Answer 4", value: "4"}
                ],
                correctAnswer: "Answer 1"
            },//end of question 
            {
                questionId: "3",
                question: "This is question number 3 for quiz 8",
                answers: [
                    {answer: "Answer 1", value: "1"}, 
                    {answer: "Answer 2", value: "2"}, 
                    {answer: "Answer 3", value: "3"}, 
                    {answer: "Answer 4", value: "4"}
                ],
                correctAnswer: "Answer 1"
            },//end of question 
            {
                questionId: "4",
                question: "This is question number 4 for quiz 8",
                answers: [
                    {answer: "Answer 1", value: "1"}, 
                    {answer: "Answer 2", value: "2"}, 
                    {answer: "Answer 3", value: "3"}, 
                    {answer: "Answer 4", value: "4"}
                ],
                correctAnswer: "Answer 1"
            },//end of question 
            {
                questionId: "5",
                question: "This is question number 5 for quiz 8",
                answers: [
                    {answer: "Answer 1", value: "1"}, 
                    {answer: "Answer 2", value: "2"}, 
                    {answer: "Answer 3", value: "3"}, 
                    {answer: "Answer 4", value: "4"}
                ],
                correctAnswer: "Answer 1"
            },//end of question 
            {
                questionId: "6",
                question: "This is question number 6 for quiz 8",
                answers: [
                    {answer: "Answer 1", value: "1"}, 
                    {answer: "Answer 2", value: "2"}, 
                    {answer: "Answer 3", value: "3"}, 
                    {answer: "Answer 4", value: "4"}
                ],
                correctAnswer: "Answer 1"
            },//end of question 
            {
                questionId: "7",
                question: "This is question number 7 for quiz 8",
                answers: [
                    {answer: "Answer 1", value: "1"}, 
                    {answer: "Answer 2", value: "2"}, 
                    {answer: "Answer 3", value: "3"}, 
                    {answer: "Answer 4", value: "4"}
                ],
                correctAnswer: "Answer 1"
            },//end of question 
            {
                questionId: "8",
                question: "This is question number 8 for quiz 8",
                answers: [
                    {answer: "Answer 1", value: "1"}, 
                    {answer: "Answer 2", value: "2"}, 
                    {answer: "Answer 3", value: "3"}, 
                    {answer: "Answer 4", value: "4"}
                ],
                correctAnswer: "Answer 1"
            },//end of question 
            {
                questionId: "9",
                question: "This is question number 9 for quiz 8",
                answers: [
                    {answer: "Answer 1", value: "1"}, 
                    {answer: "Answer 2", value: "2"}, 
                    {answer: "Answer 3", value: "3"}, 
                    {answer: "Answer 4", value: "4"}
                ],
                correctAnswer: "Answer 1"
            },//end of question 
            {
                questionId: "10",
                question: "This is question number 10 for quiz 8",
                answers: [
                    {answer: "Answer 1", value: "1"}, 
                    {answer: "Answer 2", value: "2"}, 
                    {answer: "Answer 3", value: "3"}, 
                    {answer: "Answer 4", value: "4"}
                ],
                correctAnswer: "Answer 1"
            },//end of last question 
        ]//end of array of questions for quiz 8
    },//end of quiz 8 object
    {
        quizNo: "9",
        taken: "Untaken",
        questions: [
            {
                questionId: "1",
                question: "This is question number 1 for quiz 9",
                answers: [
                    {answer: "Answer 1", value: "1"}, 
                    {answer: "Answer 2", value: "2"}, 
                    {answer: "Answer 3", value: "3"}, 
                    {answer: "Answer 4", value: "4"}
                ],
                correctAnswer: "Answer 1"
            },//end of question
            {
                questionId: "2",
                question: "This is question number 2 for quiz 9",
                answers: [
                    {answer: "Answer 1", value: "1"}, 
                    {answer: "Answer 2", value: "2"}, 
                    {answer: "Answer 3", value: "3"}, 
                    {answer: "Answer 4", value: "4"}
                ],
                correctAnswer: "Answer 1"
            },//end of question 
            {
                questionId: "3",
                question: "This is question number 3 for quiz 9",
                answers: [
                    {answer: "Answer 1", value: "1"}, 
                    {answer: "Answer 2", value: "2"}, 
                    {answer: "Answer 3", value: "3"}, 
                    {answer: "Answer 4", value: "4"}
                ],
                correctAnswer: "Answer 1"
            },//end of question 
            {
                questionId: "4",
                question: "This is question number 4 for quiz 9",
                answers: [
                    {answer: "Answer 1", value: "1"}, 
                    {answer: "Answer 2", value: "2"}, 
                    {answer: "Answer 3", value: "3"}, 
                    {answer: "Answer 4", value: "4"}
                ],
                correctAnswer: "Answer 1"
            },//end of question 
            {
                questionId: "5",
                question: "This is question number 5 for quiz 9",
                answers: [
                    {answer: "Answer 1", value: "1"}, 
                    {answer: "Answer 2", value: "2"}, 
                    {answer: "Answer 3", value: "3"}, 
                    {answer: "Answer 4", value: "4"}
                ],
                correctAnswer: "Answer 1"
            },//end of question 
            {
                questionId: "6",
                question: "This is question number 6 for quiz 9",
                answers: [
                    {answer: "Answer 1", value: "1"}, 
                    {answer: "Answer 2", value: "2"}, 
                    {answer: "Answer 3", value: "3"}, 
                    {answer: "Answer 4", value: "4"}
                ],
                correctAnswer: "Answer 1"
            },//end of question 
            {
                questionId: "7",
                question: "This is question number 7 for quiz 9",
                answers: [
                    {answer: "Answer 1", value: "1"}, 
                    {answer: "Answer 2", value: "2"}, 
                    {answer: "Answer 3", value: "3"}, 
                    {answer: "Answer 4", value: "4"}
                ],
                correctAnswer: "Answer 1"
            },//end of question 
            {
                questionId: "8",
                question: "This is question number 8 for quiz 9",
                answers: [
                    {answer: "Answer 1", value: "1"}, 
                    {answer: "Answer 2", value: "2"}, 
                    {answer: "Answer 3", value: "3"}, 
                    {answer: "Answer 4", value: "4"}
                ],
                correctAnswer: "Answer 1"
            },//end of question 
            {
                questionId: "9",
                question: "This is question number 9 for quiz 9",
                answers: [
                    {answer: "Answer 1", value: "1"}, 
                    {answer: "Answer 2", value: "2"}, 
                    {answer: "Answer 3", value: "3"}, 
                    {answer: "Answer 4", value: "4"}
                ],
                correctAnswer: "Answer 1"
            },//end of question 
            {
                questionId: "10",
                question: "This is question number 10 for quiz 9",
                answers: [
                    {answer: "Answer 1", value: "1"}, 
                    {answer: "Answer 2", value: "2"}, 
                    {answer: "Answer 3", value: "3"}, 
                    {answer: "Answer 4", value: "4"}
                ],
                correctAnswer: "Answer 1"
            },//end of last question 
        ]//end of array of questions for quiz 9
    },//end of quiz 9 object
    {
        quizNo: "10",
        taken: "Untaken",
        questions: [
            {
                questionId: "1",
                question: "This is question number 1 for quiz 10",
                answers: [
                    {answer: "Answer 1", value: "1"}, 
                    {answer: "Answer 2", value: "2"}, 
                    {answer: "Answer 3", value: "3"}, 
                    {answer: "Answer 4", value: "4"}
                ],
                correctAnswer: "Answer 1"
            },//end of question
            {
                questionId: "2",
                question: "This is question number 2 for quiz 10",
                answers: [
                    {answer: "Answer 1", value: "1"}, 
                    {answer: "Answer 2", value: "2"}, 
                    {answer: "Answer 3", value: "3"}, 
                    {answer: "Answer 4", value: "4"}
                ],
                correctAnswer: "Answer 1"
            },//end of question 
            {
                questionId: "3",
                question: "This is question number 3 for quiz 10",
                answers: [
                    {answer: "Answer 1", value: "1"}, 
                    {answer: "Answer 2", value: "2"}, 
                    {answer: "Answer 3", value: "3"}, 
                    {answer: "Answer 4", value: "4"}
                ],
                correctAnswer: "Answer 1"
            },//end of question 
            {
                questionId: "4",
                question: "This is question number 4 for quiz 10",
                answers: [
                    {answer: "Answer 1", value: "1"}, 
                    {answer: "Answer 2", value: "2"}, 
                    {answer: "Answer 3", value: "3"}, 
                    {answer: "Answer 4", value: "4"}
                ],
                correctAnswer: "Answer 1"
            },//end of question 
            {
                questionId: "5",
                question: "This is question number 5 for quiz 10",
                answers: [
                    {answer: "Answer 1", value: "1"}, 
                    {answer: "Answer 2", value: "2"}, 
                    {answer: "Answer 3", value: "3"}, 
                    {answer: "Answer 4", value: "4"}
                ],
                correctAnswer: "Answer 1"
            },//end of question 
            {
                questionId: "6",
                question: "This is question number 6 for quiz 10",
                answers: [
                    {answer: "Answer 1", value: "1"}, 
                    {answer: "Answer 2", value: "2"}, 
                    {answer: "Answer 3", value: "3"}, 
                    {answer: "Answer 4", value: "4"}
                ],
                correctAnswer: "Answer 1"
            },//end of question 
            {
                questionId: "7",
                question: "This is question number 7 for quiz 10",
                answers: [
                    {answer: "Answer 1", value: "1"}, 
                    {answer: "Answer 2", value: "2"}, 
                    {answer: "Answer 3", value: "3"}, 
                    {answer: "Answer 4", value: "4"}
                ],
                correctAnswer: "Answer 1"
            },//end of question 
            {
                questionId: "8",
                question: "This is question number 8 for quiz 10",
                answers: [
                    {answer: "Answer 1", value: "1"}, 
                    {answer: "Answer 2", value: "2"}, 
                    {answer: "Answer 3", value: "3"}, 
                    {answer: "Answer 4", value: "4"}
                ],
                correctAnswer: "Answer 1"
            },//end of question 
            {
                questionId: "9",
                question: "This is question number 9 for quiz 10",
                answers: [
                    {answer: "Answer 1", value: "1"}, 
                    {answer: "Answer 2", value: "2"}, 
                    {answer: "Answer 3", value: "3"}, 
                    {answer: "Answer 4", value: "4"}
                ],
                correctAnswer: "Answer 1"
            },//end of question 
            {
                questionId: "10",
                question: "This is question number 10 for quiz 10",
                answers: [
                    {answer: "Answer 1", value: "1"}, 
                    {answer: "Answer 2", value: "2"}, 
                    {answer: "Answer 3", value: "3"}, 
                    {answer: "Answer 4", value: "4"}
                ],
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