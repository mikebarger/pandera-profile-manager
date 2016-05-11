angular.module('app')
    .controller('profileDetailController', ['$scope', '$routeParams', 'profileService', profileDetailController]);

function profileDetailController($scope, $routeParams, profileService) {
    var viewModel = this;
    
    viewModel.profileId = $routeParams.id;
    
    var data = profileService.getProfileById(viewModel.profileId, init);
    console.log(data);
    
    function init(data) {
        viewModel.consultantName = data.consultantName;
        viewModel.competencyCenter = data.competencyCenter;
        viewModel.jobTitle = data.jobTitle;
        viewModel.location = data.location; 
        viewModel.areasOfExpertise = data.areasOfExpertise;
        viewModel.education = data.education;
        viewModel.certifications = data.certifications;
        viewModel.yearsOfExperience = data.yearsOfExperience;
        viewModel.overview = data.overview;
    }
    
    viewModel.selectTab = function(tabId) {
        viewModel.selectedTab = tabId;
    }
    
    viewModel.selectTab("bio");
}