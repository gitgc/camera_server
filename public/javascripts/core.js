var cameraServer = angular.module('cameraServer', ['ngRoute', 'eventsController', 'eventsService', 'angularMoment']);

cameraServer.config(function($routeProvider) {
    $routeProvider

        // route for the home page
        .when('/', {
            templateUrl : '/views/home',
            controller  : 'EventListController'
        })

        // route for the about page
        .when('/event/:eventId', {
            templateUrl : '/views/event',
            controller  : 'EventDetailController'
        });

});
