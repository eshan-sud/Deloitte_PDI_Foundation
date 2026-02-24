const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./db/db");
const routes = require("./routes");
const ApiError = require("./utils/ApiError");
const errorHandler = require("./middlewares/error.middleware");
const app = express();
const PORT = 3001;

// Load environment variables from .env file
dotenv.config();

//connect to mongoDB
connectDB();

// CORS middleware
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }
  next();
});

app.use(express.json());
// app.use('/api/v1/listings', listingRouter);
app.use("/api/v1", routes);

app.use((req, res, next) => {
  const error = new ApiError(404, "Route Not Found");
  next(error);
});

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}....`);
});
