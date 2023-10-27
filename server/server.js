const express = require("express");
const cors = require("cors");
const colors = require("colors");
const dotenv = require("dotenv");
const morgan = require("morgan");

//dotenv config
dotenv.config();

//rest object
const app = express();

//middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

//routes
app.get("", (req, res) => {
  res.status(200).json({
    success: true,
    message: "welcome to full stack app ",
  });
});

//PORT
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`.bgGreen.white);
});
