require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

const workoutRoutes = require("./routes/workouts");

const app = express();

app.use(express.json());
app.use((req, res, next) => {
  console.log("I am MiddleWare");
  next();
});

app.use("/api/workouts", workoutRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("connection successfull");
    app.listen(process.env.PORT, () => {
      console.log("Listening to port", process.env.PORT);
    });
  })
  .catch(() => {
    console.log("there was an error");
  });
