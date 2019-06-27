import React from 'react';
import "./style.css";
import { Link } from "react-router-dom";
import Quiz from "../Quiz"


function BasicTable(props) {
    return (
        <table className="table table-striped">
            <tbody>
                {props.quizzes.map((quiz, index) =>
                    (
                        <Quiz
                            quiz={quiz}
                            index={index}/>
                    )
                )}

                <tr>
                    <th scope="row"><Link to={`/question/`}>Midterm </Link></th>
                    <td>{props.midterm}</td>
                    <td><a href="#" target="blank">Retake</a></td>
                    <td><a href="#" target="blank">Practice</a></td>
                </tr>
                <tr>
                    <th scope="row"><Link to={`/question/`}>Final </Link></th>
                    <td>{props.final}</td>
                    <td><a href="#" target="blank">Retake</a></td>
                    <td><a href="#" target="blank">Practice</a></td>
                </tr>
            </tbody>
        </table>
    );
}

export default BasicTable;

