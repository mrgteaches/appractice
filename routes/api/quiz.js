const router = require("express").Router();
const quizController = require("../../controllers/quizControllers");

router
  .route("/")
  .get(quizController.findQuizzes)

router
    .route("/:id")
    .get(quizController.findById)

module.exports = router;