const express = require("express");
const dotenv = require("dotenv");
const mongodb = require("./config/conn");
const userRouter = require("./routes/userRoutes");
const app = express();

dotenv.config();

const port = process.env.PORT || 8080;

mongodb.mongoDBConnection();

app.use("/api", userRouter);
// app.use("/api/employee", employeeRouter);

app.listen(port, () => {
  console.log(`Server running at ${port}`);
});
