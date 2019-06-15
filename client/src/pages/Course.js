import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import BasicTable from "../components/BasicTable";
import { Col, Row, Container } from "../components/Grid";
import "./courseStyle.css";
import API from "../utils/API"

class Course extends Component {
    state = {
        courseGrade: 100,
        quizzes: [],
        quiz1: "Untaken",
        quiz2: "Untaken",
        quiz3: "Untaken",
        quiz4: "Untaken",
        quiz5: "Untaken",
        quiz6: "Untaken",
        quiz7: "Untaken",
        quiz8: "Untaken",
        quiz9: "Untaken",
        quiz10: "Untaken",
        midterm: "Untaken",
        final: "Untaken"
    };

    componentDidMount() {
        // this.loadQuestions();
        API.getAllQuizzes()
            .then(res => {
                this.setState({ quizzes: res })
            })
            .catch(err => console.log(err));
    }


    handleQuizClick = (e) => {
        // console.log("Click works");
        console.log(e.currentTarget.dataset.id);
        // const quizNo = event.target.attributes.getNamedItem("data-value".value);
        //takes user to questions page
        //fires loadquestions
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
                        <h2>10 quizzes - 1 midterm - 1 final - Course Grade: <span className="finalGrade">{this.state.courseGrade}%</span></h2>
                    </div>
                </Row>
                <Row>
                    <Col size="md-12">
                        <BasicTable
                            onClick={this.handleQuizClick}
                            quizzes={this.state.quizzes}
                            midterm={this.state.midterm}
                            final={this.state.final}
                        />
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Course;