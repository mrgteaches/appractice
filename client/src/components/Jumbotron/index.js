import React from "react";
import "./style.css";

function Jumbotron() {
    return (
        <div className="jumbotron">
            <div className = "logo">
            <img className= "epImage" src={require("./eplogo.jpg")} />
            </div>
            <h1 className="epu">AP Biology</h1>
        </div>
    );
}

export default Jumbotron;