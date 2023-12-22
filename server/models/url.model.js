const mongoose = require("mongoose");

// Defining the schema for URLs
const urlSchema = new mongoose.Schema(
  {
    // Unique identifier for the shortened URL
    shortId: {
      type: String,
      required: true,
      unique: true,
    },
    // The original URL to which the short URL redirects
    redirectUrl: {
      type: String,
      required: true,
    },
    // Array to store visit history with timestamps
    visitHistory: [{ timestamps: { type: Number } }],
  },
  {
    // Including timestamps in the schema to automatically record createdAt and updatedAt
    timestamps: true,
  }
);

// Creating a model named 'URL' based on the defined schema
const URL = mongoose.model("url", urlSchema);

module.exports = URL; // Exporting the URL model for use in other files
