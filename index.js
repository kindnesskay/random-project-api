const express = require("express");
const data = require("./data.json");
const dotenv=require('dotenv')
const cors=require("cors")
const app = express();
app.use(cors())
dotenv.config()
const port =process.env.PORT;
const max = 10;

app.get("/api", (req, res) => {
  res.send({ message: "welcome to the random project api  /api/idea" });
});
app.get("/", (req, res) => {
  res.send({ message: "welcome to the random project api go to /api/idea" });
});

app.get("/api/idea", (req, res) => {
  let random_number = Math.floor(Math.random() * max) + 1;
  try {
    let idea = data[random_number];
    return res.send({ data: idea });
  } catch (error) {
    return res.status(500).json({ error: "An error occured" });
  }
});
app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
module.exports = app;
