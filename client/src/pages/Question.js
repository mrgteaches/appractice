import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import "./questionStyle.css";
import API from "../utils/API";
import ResultsBtn from "../components/ResultsBtn";
import { stat } from "fs";

class Question extends Component {
    state = {
        currentQuiz: {},
        currentQuizScore: 0,      
        quizResults: [
            {question: "1", answer: "" },
            {question: "2", answer: "" },
            {question: "3", answer: "" },
            {question: "4", answer: "" },
            {question: "5", answer: "" },
            {question: "6", answer: "" },
            {question: "7", answer: "" },
            {question: "8", answer: "" },
            {question: "9", answer: "" },
            {question: "10", answer: "" }
    ]
    };

    componentDidMount() {
        this.loadQuestions();
        
    }

    loadQuestions = () => {
        API.getQuiz(this.props.match.params.id)
            .then(res => {
                
                this.prepareQuiz(res.data);
                this.setState({ currentQuiz: res.data })      
                // const quizResults = []
                // quizResults.length = this.state.currentQuiz.questions.length
                // this.setState( {quizResults})      
                // console.log(this.state.currentQuiz.questions.length)  
            })            
            .catch(err => console.log(err));
    }

    answerClick = (e) => {        
        // grabbing question number using the answer id
        const questionId = (e.target.id.length === 3) ? e.target.id.substring(0,1) : e.target.id.substring(0,2); 
        // determining the index for the question id on line 47
        const index = parseInt(questionId) - 1;   
        // determine whether answer property is empty 
        if(this.state.quizResults[index].answer === "") { 
            // making a copy of the array in state
            const array = this.state.quizResults
            // setting the answer value for the correct question
            array[index].answer = e.target.value

            // determine if answer is correct
            if (e.target.value === 1) {
                // console.log(e.target.id);
                this.setState({  
                    currentQuizScore: this.state.currentQuizScore + 10,
                    quizResults: array
                })          
            }          
            else {
                this.setState({                 
                    quizResults: array
                })
            }  
        } else {

            // change!!
            alert("already answered");
            return
        }     
       
       
          
        console.log(this.state)
    }

    results = (id) => {      
        API.storeScore(id, this.state.currentQuizScore.toString())
        .then(res => {           
            console.log(res);          
        })
        .catch(err => console.log(err));
    
    }

    prepareQuiz(currentQuiz) {
        currentQuiz.questions.forEach(question => {this.shuffleArray(question.answers)})
    }

    shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }return array
    }

    render() {
        return (
            this.state.currentQuiz.questions ?
                <Container fluid>
                    <Row>
                        <Col size="md-12">
                            <div className="card text-center">
                                <div className="card-header">
                                    <h1> Biology Quiz {this.state.currentQuiz.quizNo} </h1>
                                </div>

                                {this.state.currentQuiz.questions.map((question, index) =>
                                    (
                                        <div className="card-body">
                                            <h5 className="card-title">Question {index + 1}</h5>
                                            <div className="card-box">
                                                <p className="card-text">{question["question"]} </p>
                                                <ul className="list-group list-group-flush">
                                                {question.answers.map((answer) =>
                                                        (
                                                            <li className="list-group-item list-group-item-action flex-column align-items-start" 
                                                            value={answer.value} id={answer.id} onClick={this.answerClick}>{answer.answer}</li>
                                                        )
                                                    )}
                                                </ul>
                                            </div>
                                        </div>
                                    )
                                )}

                                <div>
                                    <ResultsBtn
                                        onClick={() => this.results(this.state.currentQuiz._id)}
                                        score={this.state.currentQuizScore}
                                        quiz={this.state.currentQuiz._id}
                                    />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container> : null
        );
    }
}

export default Question;