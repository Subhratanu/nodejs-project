const express = require("express");
const dotenv = require("dotenv");
const mongodb = require("./config/conn");
const userRouter = require("./routes/userRoutes");
const userMiddleware = require("./middlewares/userMiddleware");
const app = express();

dotenv.config();

const port = process.env.PORT || 8080;
app.use(express.urlencoded({ extended: false }));
mongodb.mongoDBConnection();

app.use("/api", userRouter);
app.use(userMiddleware);
// app.use("/api/employee", employeeRouter);

app.listen(port, () => {
  console.log(`Server running at ${port}`);
});
