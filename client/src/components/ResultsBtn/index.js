import React from "react";

import { Link } from "react-router-dom";
import "./resultsbtnstyle.css";


function ResultsBtn(props) {
  return (
    <h1 className="results" {...props} role="button">
        <Link to={`/results/${props.quiz}`} style={{color: "black"}}
    >Click to see your results! </Link>    
    </h1>

    // <button type="button" className="btn btn-primary btn-lg btn-block" {...props}> <Link to={`/results/${props.quiz}`} style={{color: "black"}}
    // >See Your Results! </Link>    </button>
  );
}

export default ResultsBtn;