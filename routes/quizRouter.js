// Requiring Express.
const express = require("express");
// Requiring Router from Express.
const router = express.Router();
// Requiring controllers from the controllers folder's roomController.js.
const quiz = require("../controllers/quizController.js");

router.post("/addresults", quiz.addResultsController);
router.get("/getall", quiz.getAllController);
router.delete("/delete/:id", quiz.removeOneController);

// Exporting controllers to server.js.
module.exports = router;
