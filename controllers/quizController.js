// Requiring Mongoose.
const mongoose = require("mongoose");
// Requiring the schemas that has been created in the quizModel.js file.
const Quiz = require("../models/quizModel.js");

/**
 * POST/ CREATE:
 * @required  Body properties: quiz, difficulty, score.
 * @param {*} req Creating a new post request with the quiz result's props.
 * @param {*} res Data for a specific quiz result that has been added.
 * @returns Data of the quiz result that is being added from the request input or an error message should the
 * request be unsuccessful.
 */
exports.addResultsController = async (req, res) => {
  const { quiz, difficulty, score } = req.body;

  const newquiz = new Quiz({
    name: quiz,
    difficulty,
    score,
  });
  try {
    await newquiz.save();
    res.send("New Quiz Result Added Successfully");
  } catch (error) {
    return res.status(400).json({ error });
  }
};

/**
 * GET/ READ:
 * Requesting all the quiz results' information from MongoDB and returning the response with the information.
 * @required  Content.
 * @param {*} req Getting the array of quiz results.
 * @param {*} res Copy of the content (copyContent).
 * @returns A list of the current quiz results that are already written.
 */

exports.getAllController = async (req, res) => {
  try {
    const quiz = await Quiz.find({});
    res.json(quiz);
  } catch (error) {
    return res.status(400).json({ error });
  }
};

/**
 * DELETE:
 * @required  Body properties: id.
 * @param {*} req Quiz with the matching id to be deleted.
 * @param {*} res Updated copy of the content (copyContent).
 * @returns List of quiz results and a confirmation message is returned to confirm that the post has been deleted or an error message should the
 * request be unsuccessful.
 */

exports.removeOneController = (req, res) => {
  Quiz.findByIdAndRemove(req.params.id)
    .then((quiz) =>
      res.json({
        message: "Quiz Result Deleted Successfully.",
        quiz,
      })
    )
    .catch((err) =>
      res.status(400).json({ message: "Error Deleting the Quiz Result.", err })
    );
};
