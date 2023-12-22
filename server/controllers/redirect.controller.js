// Importing the URL model
const URL = require("../models/url.model");

async function redirectToUrl(req, res) {
  const shortId = req.params.shortId;

  const entry = await URL.findOneAndUpdate(
    { shortId },
    {
      $push: {
        visitHistory: {
          timeStamp: Date.now(),
        },
      },
    },
    { new: true } // This option returns the updated document
  );

  if (entry) {
    res.redirect(entry.redirectUrl);
  } else {
    // Handle the case when the entry with the provided shortId is not found
    res.status(404).send("URL not found");
  }
}

module.exports = {
  redirectToUrl,
};
