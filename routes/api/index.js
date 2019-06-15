const router = require("express").Router();
// const quizRoutes = require("./quiz");
const quizController = require("../../controllers/quizControllers");

router.use("/quiz", quizController.findQuizzes);

module.exports = router;
