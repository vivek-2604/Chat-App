const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const { chats } = require("./data/data.js");
const userRoutes = require("./routes/UserRoutes.js");
const connectDB = require("./config/db.js");

const app = express();
dotenv.config();
connectDB();

const corsOption = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200,
  credentials: true,
};
app.use(cors(corsOption));

app.use(express.json()); //accept json Data

app.get("/", (req, res) => {
  res.send("API RUNNING");
});

app.use("/user", userRoutes);

app.get("/api/chats/:id", (req, res) => {
  const singleChat = chats.find((i) => i._id === req.params.id);
  res.send(singleChat);
});

const port = process.env.PORT || 5000;

app.listen(port, console.log(`server start at Port no ${port}`));
