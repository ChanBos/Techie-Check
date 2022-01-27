// Requiring Express.
const express = require("express");
// Requiring fetch from Node Fetch.
const fetch = require("node-fetch");
// Requiring dotenv.
const dbConfig = require("../config/app.config.js");

/**
 * Requesting the information from the Quiz API media and returning the response with the information. The search is based on the category of the
 * search query (eg. Linux or Bash) and the difficulty (easy, medium, hard) of the quiz that the search results should be derived from.
 * Limiting the search results to 10.
 */

exports.getController = (req, res) => {
  fetch(
    `https://quizapi.io/api/v1/questions?apiKey=${dbConfig.API_KEY}&category=${req.query.category}&difficulty=${req.query.difficulty}&limit=10`
  )
    .then((res) => res.json())
    .then((results) => {
      res.send(results);
    });
};
