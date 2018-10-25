var express = require("express");

import ProductRouter from "./product";

module.exports = app => {
  /* GET home page. */
  app.get("/", (req, res) => {
    res.json({
      name: "The Ticketing core service",
      status: "running",
      version: "0.1"
    });
  });
  app.use("/products", ProductRouter);
};
