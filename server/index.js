const express = require("express");
const dotenv = require('dotenv').config();

// files
const connectToDB = require("./config/connectToDB");

// initilize express
const app = express();


// connect database
connectToDB()

// middlewares
// json and body parser's
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("done");
});

// handle out of scope URL's
// app.all("*", (req, res) => {
//   res
//     .status(404)
//     .json({ success: false, message: `requested route(${req.url}) not found` });
// });

// start server
app.listen(process.env.PORT, () => {
  console.log(`server started, ${process.env.PORT}`);
});