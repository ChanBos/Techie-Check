// Requiring Express.
const express = require("express");
// Requiring Router from Express.
const router = express.Router();
// Requiring controllers from the controllers folder's apiController.js.
const { getController } = require("../controllers/apiController.js");

router.get("/api", getController);

// Exporting controllers to server.js.
module.exports = router;
