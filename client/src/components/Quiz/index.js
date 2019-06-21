import React from 'react';
import "./style.css";
import { Link } from "react-router-dom";


function Quiz(props) {
    return (
        <tr key={props.quiz._id}>
            <th scope="row" > <Link to={`/question/${props.quiz._id}`} 
            >Quiz {props.index + 1} </Link></th>
            <td>{props.quiz.taken}</td>
            <td>Retake</td>
            <td>Practice</td>
        </tr>
    );
}

export default Quiz;
