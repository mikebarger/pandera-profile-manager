angular.module('app', ['ngRoute']);

angular.module('app').config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/',{ template:'This is the default Route' })
        .when('/profiles/:id', {
            templateUrl: "/app/profile/profileDetail.htm",
            controller: "profileDetailController as profile"
        })
        .otherwise({redirectTo:'/'}); 
}]);