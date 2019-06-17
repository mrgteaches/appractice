import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import "./questionStyle.css";
import API from "../utils/API";

class Question extends Component {
    state = {
        currentQuizNumber: 1,
        currentQuestion: "",
        currentQuestionNumber: 1,
        answer1: "",
        answer2: "",
        answer3: "",
        answer4: "",
        quizzes: []

    };

    // componentDidMount() {
    //     this.loadQuestions();
    // }
  
    componentDidMount() {
        // this.loadQuestions();
        API.getAllQuizzes()
            .then(res => {
                console.log(res);
                this.setState({ quizzes: res })
            })
            .catch(err => console.log(err));
    }

    // loadQuestions = () => {

    //     API.getQuiz(this.props.match.params.id)
    //         .then(res => this.setState({}))
    //         .catch(err => console.log(err));
    // }

    render() {
        console.log(this.props)
        return (
            <Container fluid>
                <Row>
                    <Col size="md-12">
                        <div className="card text-center">
                            <div className="card-header">
                                <h1> Biology Quiz {this.state.currentQuizNumber}</h1>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Question {this.state.currentQuestionNumber}</h5>
                                <div className="card-box">
                                    <p className="card-text">{this.state.currentQuestion} </p>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">{this.state.answer1}</li>
                                        <li className="list-group-item">{this.state.answer2}</li>
                                        <li className="list-group-item">{this.state.answer3}</li>
                                        <li className="list-group-item">{this.state.answer4}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Question;