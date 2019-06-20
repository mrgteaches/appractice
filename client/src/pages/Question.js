import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import "./questionStyle.css";
import API from "../utils/API";

class Question extends Component {
    state = {       
        currentQuiz: {},    
        currentQuizScore: 0
    };

    componentDidMount() {
        this.loadQuestions();
    }

    loadQuestions = () => {
        console.log(this.props.match.params.id)
        API.getQuiz(this.props.match.params.id)
            .then(res => {
                console.log(res);
                this.setState({ currentQuiz: res.data })
            })
            .catch(err => console.log(err));
    }

    answerClick = () => {
        this.setState({currentQuizScore: this.state.currentQuizScore + 10})
        console.log(this.state.currentQuizScore);
        console.log("Answer clicked");      
    }

    render() {
        console.log(this.state)

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
                                            <li className="list-group-item" onClick={this.answerClick}>{question["answers"][0]}</li>
                                            <li className="list-group-item" onClick={this.answerClick}>{question["answers"][1]}</li>
                                            <li className="list-group-item" onClick={this.answerClick}>{question["answers"][2]}</li>
                                            <li className="list-group-item" onClick={this.answerClick}>{question["answers"][3]}</li>
                                        </ul>
                                    </div>
                                </div>



                                // <div className="card-body">
                                //     <h5 className="card-title">Question</h5>
                                //     <div className="card-box">
                                //         <p className="card-text">{this.state.currentQuiz.questions[0]["question"]} </p>
                                //         <ul className="list-group list-group-flush">
                                //             <li className="list-group-item">{this.state.currentQuiz.questions[0]["answers"][0]}</li>
                                //             <li className="list-group-item">{this.state.currentQuiz.questions[0]["answers"][1]}</li>
                                //             <li className="list-group-item">{this.state.currentQuiz.questions[0]["answers"][2]}</li>
                                //             <li className="list-group-item">{this.state.currentQuiz.questions[0]["answers"][3]}</li>
                                //         </ul>
                                //     </div>
                                // </div>


                                )
                                )} 

                            </div>
                        </Col>
                    </Row>
                </Container> : null
        );
    }
}

export default Question;