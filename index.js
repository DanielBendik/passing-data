import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  const data = {
    message: "Enter your name below:",
  };

  res.render("index.ejs", data);
});

app.post("/submit", (req, res) => {
  var numberOfLetters = req.body.fName.length + req.body.lName.length;

  const data = {
    message: "There are " + numberOfLetters + " letters in your name.",
  };

  res.render("index.ejs", data);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});