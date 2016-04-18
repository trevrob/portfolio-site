// app module
var demoApp = angular.module('portfolioApp', []);

// routes
demoApp.config(function ($routeProvider) {

   $routeProvider
    .when('/',
        {
            controller: 'HomeController',
            templateUrl: 'views/welcome.html'
        })
    .when('/work-projects',
        {
            controller: 'workProjectsController',
            templateUrl: 'views/work-projects.html'
        })
    .when('/personal-projects',
        {
            controller: 'personalProjectsController',
            templateUrl: 'views/personal-projects.html'
        })
    .otherwise({ redirectTo: '/' });

});
