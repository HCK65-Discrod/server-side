const express = require("express");
const Controller = require("./controllers");
const app = express();
const router = require("./routes");

app.use(require("cors")());
app.use(require("morgan")("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(router)

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(3000, () => console.log("Server ready"));
