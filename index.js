const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

app.use(express)

app.set("public", path.join(__dirname, "public"));

app.get("/", (req, res) => {
    res.render("index", {title: "Subscribe", message: "Hello World"});
});

app.listen(port, () => {
    console.log(`Server is on port ${port}`);
})