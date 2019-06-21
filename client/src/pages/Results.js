import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import { Col, Row, Container } from "../components/Grid";
import API from "../utils/API";
import "./resultsStyle.css";

class Results extends Component {
    state = {
        currentQuiz: "",
        currentQuizScore: 0       
    };

    componentDidMount () {
        this.showResults();
    }

    showResults () {
        API.getQuiz(this.props.match.params.id)
        .then(res => {
            // console.log(res);
            this.setState({ currentQuiz: res.data }, {currentQuizScore: res.data.taken})
        })
        .catch(err => console.log(err));
    };


    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size="md-12">
                        <Jumbotron />
                    </Col>
                </Row>
                <Row>
                    <div className="results">
                        <h2>Quiz 1 Results: <span className="quizScore">{this.state.quizScore}%</span></h2>
                    </div>
                </Row>
                <Row>
                    <Col size="md-12">
                        <div className="resultsCard">
                            <div className="card-body">
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">Question 1: This was the first question.</li>
                                    <li className="list-group-item"><span className="right">Correct Answer: This was the right answer. </span> </li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col size="md-12">
                        <div className="card-body">
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">Question 2: This was the second question.</li>
                                <li className="list-group-item"><span className="right">Correct Answer: This was the right answer. </span> </li>
                                <li className="list-group-item"><span className="wrong">Your Answer: This was your answer. It was dead wrong.</span></li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Results;