// Plain Node things
const path = require("path");

// Express things
const express = require("express");
const mustacheExpress = require("mustache-express");
const app = express();
const api = require(__dirname + "/app/api");

// Register .mustache extension with The Mustache Express
app.engine('mustache', mustacheExpress());

app.set("view engine", "mustache");
app.set("views", __dirname + "/app/views");

// Serve static assets
app.use(express.static(__dirname + "/app/public"));

app.get("/", (req, res) => {
    res.render("home");
});

app.get("/survey", (req, res) => {
    res.render("survey", {
        questions: [
            {
                text: "test question 1"
            },
            {
                text: "test question 2"
            }
        ]
    });
});

app.get("/layout", (req, res) => {
    res.render("layout");
});

app.use("/api", api);

app.listen(3000, () => {
    console.log("Your app is running on port 3000");
});
