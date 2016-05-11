var Profile = require('./profileModel');

module.exports = {
    getProfileById: getProfileById,
    saveProfile: saveProfile
}

// get /api/profiles/
function getProfileById(req, res) {
    Profile.findById(req.params.id, function(err, profile){
        if (err) res.send(err);
        res.json(profile);
    });
}

function saveProfile(req, res) {
    var profile = new Profile(req.text); // this is dangerous
    console.log("req.text -> " + req.text);
    profile.save(function(err, profile) {
        if(err) console.log("Save failed");
        console.log("Added profile: http://localhost:1234/#/profiles/" + profile._id);
    });

}