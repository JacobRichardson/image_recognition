
//Requiring express.
const express = require("express");

//Initializing express.
const app = express();


app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/views"));

app.get("/", function(req, res) {
    res.render("index.html");
});

app.listen(process.env.PORT, process.env.IP, function() {
   console.log("Image Recognition server has started.");
});


