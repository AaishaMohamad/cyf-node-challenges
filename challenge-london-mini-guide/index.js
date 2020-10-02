const express = require("express");
const app = express();
const fs = require("fs");
app.use(express.json());

// app.use(cors());

const stratford = JSON.parse(fs.readFileSync("data/Stratford.json"));
const heathrow = JSON.parse(fs.readFileSync("data/Heathrow.json"));
const harrow = JSON.parse(fs.readFileSync("data/Harrow.json"));

app.get("/:city/pharmacies", (req, res) => {
  let cityParam = req.params.city;
  console.log(cityParam);
  if (cityParam == "stratford") {
    res.send(stratford.pharmacies);
  }
  if (cityParam === "heathrow") {
    res.send(heathrow.pharmacies);
  }
  if (cityParam === "harrow") {
    res.send(harrow.pharmacies);
  }
  res.status(404).send("Something's wrong");
});

app.get("/:city/colleges", (req, res) => {
  let cityParam = req.params.city;
  if (cityParam == "stratford") {
    res.send(stratford.colleges);
  }
  if (cityParam === "heathrow") {
    res.send(heathrow.colleges);
  }
  if (cityParam === "harrow") {
    res.send(harrow.colleges);
  }
  res.status(404).send("Something's wrong");
});

app.get("/:city/doctors", (req, res) => {
  let cityParam = req.params.city;
  if (cityParam == "stratford") {
    res.send(stratford.doctors);
  }
  if (cityParam === "heathrow") {
    res.send(heathrow.doctors);
  }
  if (cityParam === "harrow") {
    res.send(harrow.doctors);
  }
  res.status(404).send("Something's wrong");
});

app.get("/:city/hospitals", (req, res) => {
  let cityParam = req.params.city;
  if (cityParam == "stratford") {
    res.send(stratford.hospitals);
  }
  if (cityParam === "heathrow") {
    res.send(heathrow.hospitals);
  }
  if (cityParam === "harrow") {
    res.send(harrow.hospitals);
  }
  res.status(404).send("Something's wrong");
});

app.get("/", (req, res) => {
  res.send("oh hello there :)");
});

app.listen(3000, () => {
  console.log("Server listening to port 3000");
});
