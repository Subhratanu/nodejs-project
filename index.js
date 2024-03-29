const express = require("express");
const dotenv = require("dotenv");
const mongodb = require("./config/conn");
const userRouter = require("./routes/userRoutes");
const app = express();

dotenv.config();

const port = process.env.PORT || 8080;
app.use(express.urlencoded({ extended: false }));
// mongodb.mongoDBConnection();

app.use("/api", userRouter);
// app.use("/api/employee", employeeRouter);

app.post("/samplepost", (req, res, next) => {
  const name = req.body.name;
  return res.send(name);
});
app.use((req, res, next) => {
  if (false) {
    next();
  } else {
    return res.send("Back to Post 1");
  }
});
app.use((req, res, next) => {
  if (true) {
    next();
  } else {
    return res.send("Back to Post 2");
  }
});
app.get("/sampleget", (req, res) => {
  return res.send("It's Finally here!");
});
app.listen(port, () => {
  console.log(`Server running at ${port}`);
});
