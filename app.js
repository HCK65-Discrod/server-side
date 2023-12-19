const express = require("express");
const Controller = require("./controllers");
const app = express();

app.use(express.static("public"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/register", Controller.register)

app.listen(3000, () => console.log("Server ready"));
