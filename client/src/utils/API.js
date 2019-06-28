import axios from "axios";

export default {

    // Gets a specific quiz
  getQuiz: function(id) {
    return axios.get("/api/quiz/" + id);
  },

    // Gets all quizzes
  getAllQuizzes: function() {
      return axios.get("/api/quiz")
      .then(res => res.data);
  },

    //updates the user's scores
  storeScore: function (id, score) {
    return axios.put("/api/quiz/" + id + "/scores", {taken: score} );
  }
  
}