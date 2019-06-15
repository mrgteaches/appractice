import React from 'react';
import "./style.css";
import { Link } from "react-router-dom";


function BasicTable(props) {
    console.log(props.quizzes);
    return (
        <table className="table table-striped">
            <tbody>

                {props.quizzes.map((quiz, index) => <tr key={quiz._id}>
                    <th scope="row" > <Link to={`/question/${quiz._id}`}>Quiz {index + 1} </Link></th>
                    <td>{props.quiz1}</td>
                    <td>Retake</td>
                    <td>Practice</td>
                </tr>)}

            </tbody>
        </table>
    );
}

export default BasicTable;