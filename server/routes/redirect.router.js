const express = require("express");
const { redirectToUrl } = require("../controllers/redirect.controller");

const router = express.Router();

/**
 * @route GET /:shortId
 * @desc Takes short id and redirects to the URL
 * @access Public
 */
router.get("/:shortId", redirectToUrl); // Use router.get for capturing the dynamic parameter

module.exports = router;
