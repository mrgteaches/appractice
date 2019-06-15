const router = require("express").Router();
const quizController = require("../../controllers/quizController");


router
  .route("/:id")
  .get(quizController.findQuiz1)

module.exports = router;