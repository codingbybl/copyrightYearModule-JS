// app.js

//jshint esversion: 6
const express = require('express');
const bodyParser = require('body-parser');
const date = require(__dirname + "/date.js");
const request = require("request"); // tbc
const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req, res) {

// display current year
  const yearFunc = date.getYear();
  res.render("timecard", {yearNow: yearFunc});

});

app.listen(process.env.PORT || 3502, function() {
  console.log('Server is running on "process.env.PORT || 3502".')
});
