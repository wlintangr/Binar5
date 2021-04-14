const express = require("express");
const path = require("path");
const app = express();
const port = 3000;
const public = path.join(__dirname, "../public");
const morgan = require("morgan");

app.use(express.static("public"));
app.use(morgan("dev"));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
// app.set("views", ".views");

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/home", (req, res) => {
  res.render("home.ejs");
});

app.get("/gamesuit", (req, res) => {
  res.render("gamesuit.ejs");
});

app.get("/work", (req, res) => {
  res.send("Selamat datang di halaman Work");
});

app.get("/contact", (req, res) => {
  res.send("Selamat datang di halaman Contact");
});

app.get("/about", (req, res) => {
  res.send("Selamat datang di halaman About Us");
});

app.use("/*", (req, res) => {
  res.status(404);
  res.send("<h1>Sabar ya halaman ini belum ada alias 404</h1>");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
