// Importing nanoid to generate a random ID
const shortid = require('shortid');
// Importing the URL model
const URL = require("../models/url.model");

// Function to handle generating a short URL
async function handleGenerateShortURL(req, res) {
  // Extracting the request body
  const body = req.body;

  // Generating a random short ID of length 8
  const shortID = shortid();

  // Checking if the URL is provided in the request body
  if (!body.url) {
    return res.status(400).json({ error: "URL is required!" });
  }

  // Creating a new entry in the URL model with the generated short ID and provided URL
  await URL.create({
    shortId: shortID,
    redirectUrl: body.url,
    visitHisory: [], // Initializing visit history as an empty array just for now... 
  });

  // Returning the generated short ID as a response
  return res.status(200).json({ url: `https://shrinkly.vercel.app/${shortID}` });
}

// Exporting the handleGenerateShortURL function
module.exports = {
  handleGenerateShortURL,
};


