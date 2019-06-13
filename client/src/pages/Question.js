import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import "./questionStyle.css";

class Question extends Component {
    state= {
        currentQuestion: "",
        answer1: "",
        answer2: "",
        answer3: "",
        answer4: ""
    };


    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size="md-12">
                        <div className="card text-center">
                            <div className="card-header">
                                <h1> Biology Quiz 1</h1>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Question 1</h5>
                                <div className="card-box">
                                    <p className="card-text">This is the question. It should be about Biology. </p>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">Answer 1</li>
                                        <li className="list-group-item">Answer 2</li>
                                        <li className="list-group-item">Answer 3</li>
                                        <li className="list-group-item">Answer 4</li>
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