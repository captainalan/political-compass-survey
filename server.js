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

// JSON parsing middleware
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.get("/", (req, res) => {
    res.render("home");
});

app.post("/test", (req, res) => {
    res.json(req.body);
});

app.get("/survey", (req, res) => {
    res.render("survey", {
        questions: [
            {
                id: "q1",
                text: "The government should use force to protect the environment.",
            },
            {
                id: "q2",
                text: "Education must be provided for all.",
            },
            {
                id: "q3",
                text: "A nuclear power plant is fine, but not in my backyard!",
            },
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
