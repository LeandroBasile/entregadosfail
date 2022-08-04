// require("dotenv").config();
import dotenv from 'dotenv'

if (process.env.NODE_ENV !== "production") {
  dotenv.config();
}

const PORT = process.env.PORT || 8080;

// const express = require("express");
import express from 'express'
import routerCartProd from './src/index.js';
const app = express();
// const rutas = require("./src/index.js");
// import {rutas} from './src/index.js'


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", express.static(__dirname + "/public")); //_dirname path absoluto

app.use("/api", routerCartProd);

app.listen(PORT, () => [console.log("server escuchando puerto: ", PORT)]);
