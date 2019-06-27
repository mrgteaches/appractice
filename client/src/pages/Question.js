import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import "./questionStyle.css";
import API from "../utils/API";
import { Link } from "react-router-dom";

class Question extends Component {
    state = {
        currentQuiz: {},
        currentQuizScore: 0,
        quizResults: [
            { question: "1", answer: "", actualAnswer: "" },
            { question: "2", answer: "", actualAnswer: "" },
            { question: "3", answer: "", actualAnswer: "" },
            { question: "4", answer: "", actualAnswer: "" },
            { question: "5", answer: "", actualAnswer: "" },
            { question: "6", answer: "", actualAnswer: "" },
            { question: "7", answer: "", actualAnswer: "" },
            { question: "8", answer: "", actualAnswer: "" },
            { question: "9", answer: "", actualAnswer: "" },
            { question: "10", answer: "", actualAnswer: "" }
        ],
        incorrect: [],
        wrongAnswers: []
    };

    componentDidMount() {
        this.loadQuestions();
    }

    loadQuestions = () => {
        API.getQuiz(this.props.match.params.id)
            .then(res => {
                this.prepareQuiz(res.data);
                this.setState({ currentQuiz: res.data })
            })
            .catch(err => console.log(err));
    }

    answerClick = (e) => {
        // grabbing question number using the answer id
        const questionId = (e.target.id.length === 3) ? e.target.id.substring(0, 1) : e.target.id.substring(0, 2);
        // determining the index for the question id on line 47
        const index = parseInt(questionId) - 1;
        // determine whether answer property is empty 
        if (this.state.quizResults[index].answer === "") {
            // making a copy of the array in state
            const array = this.state.quizResults
            const incorrectArray = this.state.incorrect
            const wrongAnswersArray = this.state.wrongAnswers

            // setting the answer value for the correct question
            array[index].answer = e.target.value

            array[index].actualAnswer = e.target.id

            // determine if answer is correct
            if (e.target.value === 1) {
                console.log("answer is correct");
                this.setState({
                    currentQuizScore: this.state.currentQuizScore + 10,
                    quizResults: array
                })
            }
            else {
                console.log("answer is incorrect");
                this.setState({
                    quizResults: array
                })
                incorrectArray.push(questionId);
                wrongAnswersArray.push(e.target.id)
                this.setState({
                    incorrect: incorrectArray,
                })
            }
        } else {
            alert("You already clicked on an answer!");
        }
    }

    results = (id) => {
        API.storeScore(id, this.state.currentQuizScore.toString())
            .then(res => {
                // console.log(res);
            })
            .catch(err => console.log(err));
    }

    prepareQuiz(currentQuiz) {
        currentQuiz.questions.forEach(question => { this.shuffleArray(question.answers) })
    }

    shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        } return array
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
                                                                value={answer.value} id={answer.id} onClick={this.answerClick}>
                                                                {answer.answer}
                                                            </li>
                                                        )
                                                    )}
                                                </ul>
                                            </div>
                                        </div>
                                    )
                                )}

                                <div>
                                    <h1 className="results" role="button">                                   

                                        <Link to={{
                                            pathname: "/results/" + this.state.currentQuiz._id,
                                            state: {
                                                quizResults: this.state.quizResults,
                                                currentQuizScore: this.state.currentQuizScore,
                                                onClick: this.results(this.state.currentQuiz._id),
                                                incorrect: this.state.incorrect,
                                                currentQuiz: this.state.currentQuiz,
                                                wrongAnswers: this.state.wrongAnswers
                                            },
                                        }} >Click here to see your results!</Link>
                                       
                                    </h1>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container> : null
        );
    }
}

// ReactDOM.render(<App />, document.querySelector('#app'));

export default Question;