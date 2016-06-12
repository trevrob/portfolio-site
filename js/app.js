// app module
var App = angular.module('portfolioApp', []);

// routes
App.config(function ($routeProvider) {


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
    .when('/personal-projects/crazy-balls',
        {
            controller: 'crazyBallsController',
            templateUrl: 'views/personal-projects/crazy-balls.html'
        })
    .when('/personal-projects/blackjack',
        {
            controller: 'blackJackController',
            templateUrl: 'views/personal-projects/blackjack.html'
        })
    .otherwise({ redirectTo: '/' });

});
