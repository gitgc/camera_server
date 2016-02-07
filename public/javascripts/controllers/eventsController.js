angular.module('eventsController', [])
    // inject the event service factory into our controller
    .controller('mainController', function($scope, $http, Events) {
        $scope.formData = {};

        Events.get()
            .success(function(data) {
                $scope.events = data;
            });

        $scope.deleteEvent = function(id) {
            Events.delete(id)
                // if successful creation, call our get function to get all the new events
                .success(function(data) {
                    $scope.events = data; // assign our new list of events
                });
        };
    });
