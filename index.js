const mongoose = require('mongoose');

var express = require('express');
var app = express();

var personSchema = mongoose.Schema({
    name: String,
    age: Number,
    nationality: String
});
var Person = mongoose.model("Person", personSchema);

app.get('/person', function (req, res) {
    res.send('Hello world');
});

app.listen(3000);