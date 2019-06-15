const router = require("express").Router();
const quizController = require("../../controllers/quizControllers");

router
  .route("/")
  .get(quizController.findQuizzes)

module.exports = router;