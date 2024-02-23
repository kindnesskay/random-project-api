const express = require("express");
const data = require("./data.json");
const app = express();
const port = 3000;
const max = 10;

app.get("/api", (req, res) => {
  res.send({ message: "welcome to the random project api" });
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
