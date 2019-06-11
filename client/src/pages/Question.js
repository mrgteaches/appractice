import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import "./questionStyle.css";

class Question extends Component {
    // state= {
    //     course = 0
    // };


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
                                <div className="card-box">
                                <h3>Question 1</h3>
                                <h2>Here is the question:</h2>
                                <ol>
                                    <li>Answer 1</li>
                                    <li>Answer 2</li>
                                    <li>Answer 3</li>
                                    <li>Answer 4</li>
                                </ol>
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