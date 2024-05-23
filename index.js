const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

app.set("view engine", "ejs");

app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.render("index", {title: "Subscribe", message: "Hello World"});
});

app.get("/hello",(req, res)=> {
    res.send("hello world");
});

app.listen(port, () => {
    console.log(`Server is on port ${port}`);
})