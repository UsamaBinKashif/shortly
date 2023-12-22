const express = require("express");
const dotenv = require("dotenv").config();

// Importing the function to connect to the database
const connectToDB = require("./config/connectToDB");

// Initializing Express
const app = express();

// Connecting to the database
connectToDB();

// Middlewares
// Setting up JSON and body parsers to handle incoming requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const urlRoute = require("./routes/url.router");
const redirectionRoute = require("./routes/redirect.router");

// Route for the url generation
app.use("/api/url", urlRoute);
// Route for the url redirection
app.use("/api", redirectionRoute);

// Handling out-of-scope URLs
app.all("*", (req, res) => {
  res
    .status(404)
    .json({ success: false, message: `requested route(${req.url}) not found` }); // Responding with a 404 status and a message for any other routes not defined
});

// Starting the server on the specified PORT from the environment variables
app.listen(process.env.PORT, () => {
  console.log(`server started, ${process.env.PORT}`); // Logging a message to indicate that the server has started
});
