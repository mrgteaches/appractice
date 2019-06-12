import React from 'react';
import "./style.css";

function BasicTable() {
    return (
        <table className="table table-striped">

            <tbody>
                <tr>
                    <th scope="row">Quiz 1</th>
                    <td>90%</td>
                    <td>Retake</td>
                    <td>Practice</td>
                </tr>
                <tr>
                    <th scope="row">Quiz 2</th>
                    <td>90%</td>
                    <td>Retake</td>
                    <td>Practice</td>
                </tr>
                <tr>
                    <th scope="row">Quiz 3</th>
                    <td>85%</td>
                    <td>Retake</td>
                    <td>Practice</td>
                </tr>
                <tr>
                    <th scope="row">Quiz 4</th>
                    <td>90%</td>
                    <td>Retake</td>
                    <td>Practice</td>
                </tr>
                <tr>
                    <th scope="row">Quiz 5</th>
                    <td>90%</td>
                    <td>Retake</td>
                    <td>Practice</td>
                </tr>
                <tr>
                    <th scope="row">Midterm</th>
                    <td>90%</td>
                    <td></td>
                </tr>
                <tr>
                    <th scope="row">Quiz 6</th>
                    <td>75%</td>
                    <td>Retake</td>
                    <td>Practice</td>
                </tr>
                <tr>
                    <th scope="row">Quiz 7</th>
                    <td>90%</td>
                    <td>Retake</td>
                    <td>Practice</td>
                </tr>
                <tr>
                    <th scope="row">Quiz 8</th>
                    <td>90%</td>
                    <td>Retake</td>
                    <td>Practice</td>
                </tr>
                <tr>
                    <th scope="row">Quiz 9</th>
                    <td>Untaken</td>
                    <td></td>
                    <td>Practice</td>
                </tr>
                <tr>
                    <th scope="row">Quiz 10</th>
                    <td>Untaken</td>
                    <td></td>
                    <td>Practice</td>
                </tr>
                <tr>
                    <th scope="row">Final</th>
                    <td>Untaken</td>
                    <td></td>
                    <td></td>
                </tr>
            </tbody>
        </table>
    );
}



export default BasicTable;