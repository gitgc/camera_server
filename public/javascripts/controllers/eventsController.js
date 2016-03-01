var eventsController = angular.module('eventsController', []);

eventsController.controller('EventListController', function($scope, $http, Events) {
    $scope.formData = {};

    Events.listAll()
        .success(function(data) {
            $scope.events = data;
        });

    $scope.deleteEvent = function(id) {
        Events.delete(id)
            .success(function(data) {
                $scope.events = data; // assign our new list of events
            });
    };
});

eventsController.controller('EventDetailController', function($scope, $routeParams, $http, Events) {
    $scope.formData = {};

    $scope.eventId = $routeParams.eventId;

    Events.get($scope.eventId)
        .success(function(data) {
            $scope.selectedEvent = data;
        });

    $scope.deleteEvent = function(id) {
        Events.delete(id)
            .success(function(data) {
                // TODO redirect to home, banner message?

                //$scope.events = data; // assign our new list of events
            });
    };
});
