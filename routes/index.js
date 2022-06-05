"use strict";

const express = require("express");
const api = express.Router();

const productCtrl = require("./../controllers/product");

api.get("/items", productCtrl.getProduct);
api.get("/items/:id", productCtrl.getProductById);

module.exports = api;
