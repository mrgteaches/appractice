import axios from "axios";

export default {

    // Gets a specific quiz
  getQuiz: function(id) {
    return axios.get("/api/quizzes/" + id);
  },

     // Gets all scores
  getScores: function() {
    return axios.get("/api/scores");
  },
  
   // Saves a score to the database
   saveScore: function() {
    return axios.post("/api/scores");
  }
  
}