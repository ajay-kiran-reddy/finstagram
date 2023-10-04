const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;
const users = require("./routes/user.route");
const posts = require("./routes/post.route");

app.use(cors());
// Since mongoose's Promise is deprecated, we override it with Node's Promise
mongoose.Promise = global.Promise;

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(bodyParser.json());
const uri =
  "mongodb+srv://ajaykiranreddy999:qT1fevHY5LnHLFgK@cluster0.oyhl9xq.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(uri, { useNewUrlParser: true })
  .then(() => console.log("Database connected successfully"))
  .catch((err) => console.log(err));

app.use("/api/user", users);
app.use("/api/post", posts);

app.use((err, req, res, next) => {
  console.log(err);
  next();
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
