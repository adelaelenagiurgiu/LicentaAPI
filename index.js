const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");

const keys = require("./config/keys");
require("./models/Section");
//require("./populate");
const router = require("./router");

mongoose.connect(keys.mongoURI);

const app = express();

app.use(morgan("combined"));
app.use(bodyParser.json());
app.use(router);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
