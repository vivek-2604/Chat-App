const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const userRoutes = require("./routes/UserRoutes.js");
const chatRoutes = require("./routes/ChatRoutes.js");
const connectDB = require("./config/db.js");
const { notFound, errorHandler } = require("./middleware/errorMiddleware.js");

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
app.use("/chat", chatRoutes);

app.use(notFound);
app.use(errorHandler);

// app.get("/api/chats", (req, res) => {
//   const singleChat = chats.find((i) => i._id === req.params.id);
//   res.send(singleChat);
// });

const port = process.env.PORT || 5000;

app.listen(port, console.log(`server start at Port no ${port}`));
