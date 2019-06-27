import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import { Col, Row, Container } from "../components/Grid";
import API from "../utils/API";
import "./resultsStyle.css";
import { Link } from "react-router-dom";

class Results extends Component {
    state = {
        currentQuiz: "",
        currentQuizScore: 0
    };

    componentDidMount() {
        this.showResults();
    }

    showResults() {
        console.log(this.props.location.state.wrongAnswers)
        API.getQuiz(this.props.match.params.id)
            .then(res => {
                this.setState({ currentQuiz: res.data });
                this.setState({ currentQuizScore: res.data.taken });
            })
            .catch(err => console.log(err));
    };

    findQuestion(question) {
        const myQuestion = this.props.location.state.currentQuiz.questions.find((item) => {
            if (item.questionId == question) {
                return item.question.toString();
            }
        })
        return myQuestion.question
    }

    findCorrectAnswer(question) {
        const myRightAnswer = this.props.location.state.currentQuiz.questions.find((item) => {
            if (item.questionId == question) {
                return item.correctAnswer.toString();
            }
        })
        return myRightAnswer.correctAnswer
    }

    render() {
        return (
            this.state.currentQuiz.questions ?
                <Container fluid>
                    <Row>
                        <Col size="md-12">
                            <Jumbotron />
                        </Col>
                    </Row>
                    <Row>
                        <div className="thisquizresults">
                            <h2>Quiz {this.state.currentQuiz.quizNo} Score: <span className="quizScore">
                                {this.props.location.state.currentQuizScore}%</span></h2>
                        </div>
                    </Row>

                    {this.props.location.state.incorrect.map((question, index) =>
                        (
                            <Row>
                                <Col size="md-12">
                                    <div className="resultsCard">
                                        <div className="card-body">
                                            <ul className="list-group list-group-flush">
                                                <li className="list-group-item"><span className="wrong">You answered Question {question} incorrectly.</span></li>
                                                <li className="list-group-item">This was the question: {this.findQuestion(question)}
                                                </li>
                                                <li className="list-group-item"><span className="right">This was the correct answer: {this.findCorrectAnswer(question)}</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        )
                    )}

                    <div>
                        <h1 className="results" role="button">
                            <Link to={{
                                pathname: "/",
                                state: {
                                    currentQuizScore: this.state.currentQuizScore
                                },
                            }} >Return to Main Course Page</Link>
                        </h1>
                    </div>

                </Container> : null
        );
    }
}

export default Results;