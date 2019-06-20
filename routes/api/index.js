const router = require("express").Router();
const quiz = require("./quiz.js");

router.use("/quiz", quiz);

module.exports = router;
