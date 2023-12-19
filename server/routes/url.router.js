const express = require("express");

const router = express.Router();

/**
 * @POST Generates new short URL and returns the shortend URL in the format example example.com/random-id
 */
router.route("/").get(getAllContacts).post(addContact);

module.exports = router;