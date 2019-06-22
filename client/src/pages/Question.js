import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import "./questionStyle.css";
import API from "../utils/API";
import ResultsBtn from "../components/ResultsBtn";

class Question extends Component {
    state = {
        currentQuiz: {},
        currentQuizScore: 0,
        // currentQuestion: {}
    };

    componentDidMount() {
        this.loadQuestions();
    }

    loadQuestions = () => {
        API.getQuiz(this.props.match.params.id)
            .then(res => {
                // console.log(res);
                this.setState({ currentQuiz: res.data })
            })
            .catch(err => console.log(err));
    }

    answerClick = (e) => {
        if (e.target.value === 1) {
            this.setState((state) => ({
                currentQuizScore: state.currentQuizScore + 10
            }));
            
        //     API.setToCorrect()
        //     .then(res => {           
        //         console.log(res);          
        //     })
        //     .catch(err => console.log(err));
        }

        else {
            console.log("incorrect");
        }
        // console.log(this.state.currentQuizScore);
        // console.log(e.currentTarget.value);
    }

    results = (id) => {      
        API.storeScore(id, this.state.currentQuizScore.toString())
        .then(res => {           
            console.log(res);          
        })
        .catch(err => console.log(err));
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
                                        <div className="card-body" 
                                        // key={this.state.currentQuiz.questions.questionId}>
                                        >
                                            <h5 className="card-title">Question {index + 1}</h5>
                                            <div className="card-box">
                                                <p className="card-text">{question["question"]} </p>
                                                <ul className="list-group list-group-flush">
                                                {this.shuffleArray(question.answers).map((answer) =>
                                                        (
                                                            <li className="list-group-item list-group-item-action flex-column align-items-start" value={answer.value} onClick={this.answerClick}>{answer.answer}</li>
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