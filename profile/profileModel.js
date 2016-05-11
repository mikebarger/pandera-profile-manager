var mongoose = require('mongoose');

var profileSchema = new mongoose.Schema({
        consultantName: String,
        competencyCenter: String,
        jobTitle: String,
        location: String,
        areasOfExpertise: String,
        education: String,
        certifications: String,
        yearsOfExperience: String,
        overview: String
});  

module.exports = mongoose.model('Profile', profileSchema);