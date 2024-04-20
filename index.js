const express = require("express");
const dotenv = require("dotenv");
const mongodb = require("./config/conn");
const userRouter = require("./routes/userRoutes");
const studentRouter = require("./routes/studentRoutes");
const profileRouter = require("./routes/profileRoutes");
const userMiddleware = require("./middlewares/userMiddleware");
const authMiddleware = require("./middlewares/authMiddleware");
const app = express();

dotenv.config();

const port = process.env.PORT || 8080;
app.use(express.urlencoded({ extended: false }));
mongodb.mongoDBConnection();

app.use("/api", userRouter);
app.use("/student", studentRouter);
app.use("/profile", authMiddleware, profileRouter);
app.use(userMiddleware);
// app.use("/api/employee", employeeRouter);

app.listen(port, () => {
  console.log(`Server running at ${port}`);
});
