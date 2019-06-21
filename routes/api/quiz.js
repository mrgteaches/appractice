const router = require("express").Router();
const quizController = require("../../controllers/quizControllers");

router
  .route("/")
  .get(quizController.findQuizzes)

router
    .route("/:id")
    .get(quizController.findById)

router
    .route("/:id/scores")
    .put(quizController.postScore)

module.exports = router;