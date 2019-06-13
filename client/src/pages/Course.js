import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import BasicTable from "../components/BasicTable";
import { Col, Row, Container } from "../components/Grid";
import "./courseStyle.css";

class Course extends Component {
    state= {
        courseGrade: 100,
        quiz1:  "Untaken",
        quiz2:  "Untaken",
        quiz3:  "Untaken",
        quiz4:  "Untaken",
        quiz5:  "Untaken",
        quiz6:  "Untaken",
        quiz7:  "Untaken",
        quiz8:  "Untaken",
        quiz9:  "Untaken",
        quiz10:  "Untaken",
        midterm:  "Untaken",
        final:  "Untaken"
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
                    <div className="summary">
                        <h2>10 quizzes - 1 midterm - 1 final - Course Grade: <span className="finalGrade">95%</span></h2>
                    </div>
                </Row>
                <Row>
                    <Col size="md-12">
                        <BasicTable />
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Course;