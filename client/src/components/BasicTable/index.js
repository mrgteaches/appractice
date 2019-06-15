import React from 'react';
import "./style.css";

function BasicTable(props) {
    return (
        <table className="table table-striped">

            <tbody>
                <tr>
                   <th scope="row" > <a href="/question" onClick={props.onClick}>Quiz 1</a></th>
                    <td>{props.quiz1}</td>
                    <td>Retake</td>
                    <td>Practice</td>
                </tr>
                <tr>
                    <th scope="row"> <a href="/question" onClick={props.onClick}>Quiz 2</a></th>
                    <td>{props.quiz2}</td>
                    <td>Retake</td>
                    <td>Practice</td>
                </tr>
                <tr>
                    <th scope="row"><a href="/question" onClick={props.onClick}>Quiz 3</a></th>
                    <td>{props.quiz3}</td>
                    <td>Retake</td>
                    <td>Practice</td>
                </tr>
                <tr>
                    <th scope="row"><a href="/question" onClick={props.onClick}>Quiz 4</a></th>
                    <td>{props.quiz4}</td>
                    <td>Retake</td>
                    <td>Practice</td>
                </tr>
                <tr>
                    <th scope="row"><a href="/question" onClick={props.onClick}>Quiz 5</a></th>
                    <td>{props.quiz5}</td>
                    <td>Retake</td>
                    <td>Practice</td>
                </tr>
                <tr>
                    <th scope="row"><a href="/question" onClick={props.onClick}>Midterm</a></th>
                    <td>{props.midterm}</td>
                    <td></td>
                </tr>
                <tr>
                    <th scope="row"><a href="/question" onClick={props.onClick}>Quiz 6</a></th>
                    <td>{props.quiz6}</td>
                    <td>Retake</td>
                    <td>Practice</td>
                </tr>
                <tr>
                    <th scope="row"><a href="/question" onClick={props.onClick}>Quiz 7</a></th>
                    <td>{props.quiz7}</td>
                    <td>Retake</td>
                    <td>Practice</td>
                </tr>
                <tr>
                    <th scope="row"><a href="/question" onClick={props.onClick}>Quiz 8</a></th>
                    <td>{props.quiz8}</td>
                    <td>Retake</td>
                    <td>Practice</td>
                </tr>
                <tr>
                    <th scope="row"><a href="/question" onClick={props.onClick}>Quiz 9</a></th>
                    <td>{props.quiz9}</td>
                    <td></td>
                    <td>Practice</td>
                </tr>
                <tr>
                    <th scope="row"><a href="/question" onClick={props.onClick}>Quiz 10</a></th>
                    <td>{props.quiz10}</td>
                    <td></td>
                    <td>Practice</td>
                </tr>
                <tr>
                    <th scope="row"><a href="/question" onClick={props.onClick}>Final</a></th>
                    <td>{props.final}</td>
                    <td></td>
                    <td></td>
                </tr>
            </tbody>
        </table>
    );
}



export default BasicTable;