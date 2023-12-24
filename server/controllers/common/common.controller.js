const URL = require("../../models/url.model");

async function getAllData(req, res) {
  URL.find()
    .then((data) => {
      // If data is successfully fetched, send it as a response
      res.status(200).json({ success: true, data });
    })
    .catch((error) => {
      // If an error occurs during fetching data, send an error response
      res.status(500).json({ success: false, error: error.message });
    });
}

module.exports = getAllData;
