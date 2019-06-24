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

  storeScore: function (id, score) {
    return axios.put("/api/quiz/" + id + "/scores", {taken: score} );
  }
  
}