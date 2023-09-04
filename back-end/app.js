require("express-async-error");

const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");

const cookieParser = require("cookie-parser");
const { StatusCodes } = require("http-status-codes");

const app = express();
app.use(cookieParser());

//For parsing json data(application/json) from incoming req we use the following
app.use(bodyParser.json());
app.use(cors());
dotenv.config();

app.get("/", (req, res, next) => {
  res.send("Hi :)");
});

app.get("/test", (req, res, next) => {
  res.json({ message: "Hello world" });
});

const jobRoute = require("./routes/jobRoute");
const authRoute = require("./routes/authRoute");
const userRoute = require("./routes/userRoute");

const { authenticateUser } = require("./middlewares/authMiddleware");


app.use(authRoute);
app.use(jobRoute);
app.use(userRoute);

//404 middleware
app.use("*", (req, res, next) => {
  //'*' stands for all routes that do not match the all the above routes
  res.status(StatusCodes.NOT_FOUND).json({ message: "page not found" });
});

//General error handling middleware
app.use((error, req, res, next) => {
  const statusCode = error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR;
  const message = error.message || "Something went error(error msg not passed)";
  res.status(statusCode).json({ message: message });
});

const port = 8080;
mongoose
  .connect(process.env.MONGO_URL)
  .then((result) => {
    app.listen(process.env.PORT || port, () => {
      console.log(`Server running on http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });
