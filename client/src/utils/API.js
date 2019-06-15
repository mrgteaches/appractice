import axios from "axios";

export default {

    // Gets a specific quiz
  getQuiz: function(id) {
    return axios.get("/api/quiz/" + id);
  },

  getAllQuizzes: function() {
      return axios.get("http://localhost:3001/api/quiz")
      .then(res => res.data);
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