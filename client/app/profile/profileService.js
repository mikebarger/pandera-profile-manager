angular.module('app')
    .factory('profileService', ['$http', profileService])

function profileService($http) {
    var service = {};
    var urlBase = "/api/profiles/";
    
    service.getProfileById = function(id, callback) {
        console.log(urlBase + id)
        return $http.get(urlBase + id).success(callback);               
    };
    
    return service;
}