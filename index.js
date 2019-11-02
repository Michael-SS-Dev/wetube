const express = require("express");
const app = express();

const PORT = 4000;

function handleListening() {
  console.log(`Listening on: http://localhost:${PORT}`);
}

function handleHome(req, res) {
  res.send("Hello from Home");
}

function handleProfile(req, res) {
  res.send("you are in profile");
}

app.get("/", handleHome);

app.listen(PORT, handleListening);
