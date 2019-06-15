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

  
    handleQuizClick =() => {
        console.log("Click works");
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
                        quiz1= {this.state.quiz1}
                        quiz2= {this.state.quiz2}
                        quiz3= {this.state.quiz3}
                        quiz4= {this.state.quiz4}
                        quiz5= {this.state.quiz5}
                        quiz6= {this.state.quiz6}
                        quiz7= {this.state.quiz7}
                        quiz8= {this.state.quiz8}
                        quiz9= {this.state.quiz9}
                        quiz10= {this.state.quiz10}
                        midterm= {this.state.midterm}
                        final= {this.state.final}
                        />
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Course;