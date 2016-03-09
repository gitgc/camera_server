var cameraServer = angular.module('cameraServer', ['ngRoute', 'eventsController', 'eventsService', 'angularMoment']);

cameraServer.config(function($routeProvider) {
    $routeProvider

        .when('/', {
            templateUrl : '/views/home',
            controller  : 'EventListController'
        })

        .when('/event/:eventId', {
            templateUrl : '/views/event',
            controller  : 'EventDetailController'
        });

});
