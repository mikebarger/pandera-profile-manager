var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var Q = require('Q');
var mongoose = require('mongoose');
var routes = require('./routes');
var profileController = require('./profile/profileController');

app.config = require('./config');

mongoose.connect(app.config.mongodb);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', routes);
app.use(express.static('client'));

app.listen(app.config.port);
console.log('Listening on http://localhost:' + app.config.port);

var db = mongoose.connection;


db.once('open', function(){
    console.log('Successfully connected to mongodb!');

    // seed db with a profile
    var req = { text: {
        consultantName: "Mike Barger",
        competencyCenter: "",
        jobTitle: "Web Developer",
        location: "Orlando, FL",
        areasOfExpertise: "Microsoft Web Development",
        education: "Thomas Nelson Community College (1996-1998)",
        certifications: "",
        yearsOfExperience: "18 years of web development",
        overview: "Will work for beer!"
    }};

    profileController.saveProfile(req);
});

module.exports = app;
