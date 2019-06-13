const router = require("express").Router();
const quizController = require("../../controllers/quizController");

router.route("/")
  .get(quizController.findAll)
  .post(quizController.create);

router
  .route("/:id")
  .get(quizController.findById)
  .put(quizController.update)
  .delete(quizController.remove);

module.exports = router;