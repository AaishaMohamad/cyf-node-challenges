const express = require("express");
const app = express();
const fs = require("fs");
app.use(express.json());

// app.use(cors());

fs.readFile("data/Stratford.json", function (error, file) {
  const parsedFile = JSON.parse(file);

  app.get("/pharmacies", (req, res) => {
    res.send(parsedFile.pharmacies);
  });

  app.get("/colleges", (req, res) => {
    res.send(parsedFile.colleges);
  });

  app.get("/doctors", (req, res) => {
    res.send(parsedFile.doctors);
  });

  app.get("/hospitals", (req, res) => {
    res.send(parsedFile.hospitals);
  });
});

app.get("/", (req, res) => {
  res.send("oh hello there :)");
});

app.listen(3000, () => {
  console.log("Server listening to port 3000");
});
