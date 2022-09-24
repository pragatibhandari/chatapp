const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose"); // to interect with mongoDB server

const app = express();
require("dotenv").config();

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connection Successful");
  })
  .catch((err) => {
    console.log(err.message);
  });

const server = app.listen(process.env.PORT, () => {
  console.log(`server started on Port ${process.env.PORT}`);
});
