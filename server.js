const express = require("express");
const morgan = require("morgan");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 4001;

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(
    `server listening in ${process.env.NODE_ENV} mode on port ${PORT}`
  );
});
