import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import { Col, Row, Container } from "../components/Grid";

class Course extends Component {
    // state= {
    //     course = 0
    // };


    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size="md-12">
                        <Jumbotron>

                        </Jumbotron>
                    </Col>
                </Row>
            </Container>
        );

    }
}

export default Course;