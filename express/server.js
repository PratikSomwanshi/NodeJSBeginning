const express = require("express");
const path = require("path");

const app = express();

const PORT = process.env.PORT || 8000;
const mainRouter = require("./routes");

app.set("view engine", "ejs");

console.log(app.get("view engine"));

// app.use(express.static("public"));

app.use(mainRouter);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
