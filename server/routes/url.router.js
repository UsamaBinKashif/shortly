const express = require("express");
const { handleGenerateShortURL } = require("../controllers/url.controller");

const router = express.Router();

/**
 * @route POST /url
 * @desc Generates a new short URL
 * @access Public
 */
router.route("/").post(handleGenerateShortURL);

module.exports = router;
