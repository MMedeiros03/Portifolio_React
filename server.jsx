/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
import express from "express";

const { resolve } = require("path");

const app = express();

app.use("/", express.static(resolve(__dirname, "./build")));

app.listen(process.env.PORT || 3000, (err) => {
  if (err) {
    console.log(err);
  }

  console.log("tudo ok");
});
