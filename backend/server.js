const express = require("express");
const dotenv = require("dotenv");
const { chats } = require("./data/data");

const app = express();
dotenv.config();

app.get("/", (req, res) => {
  res.send("API RUNNING");
});

app.get("/api/chats", (req, res) => {
  res.send(chats);
});

app.get("/api/chats/:id", (req, res) => {
  const singleChat = chats.find((i) => i._id === req.params.id);
  res.send(singleChat);
});

const port = process.env.PORT || 5000;

app.listen(port, console.log(`server start at Port no ${port}`));
