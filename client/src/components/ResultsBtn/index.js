import React from "react";
import "./style.css";
import { Link } from "react-router-dom";


function ResultsBtn(props) {
  return (
    <span className="results-btn" {...props} role="button">
        <Link to={"/results"} 
    >See Your Results! </Link>
    
    </span>
  );
}

export default ResultsBtn;