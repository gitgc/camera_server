angular.module('eventsController', [])

    // inject the event service factory into our controller
    .controller('mainController', function($scope, $http, Events) {
        $scope.formData = {};

        // GET =====================================================================
        // when landing on the page, get all events and show them
        // use the service to get all the events
        Events.get()
            .success(function(data) {
                $scope.events = data;
            });

        // DELETE ==================================================================
        // delete a event after checking it
        $scope.deleteEvent = function(id) {
            Events.delete(id)
                // if successful creation, call our get function to get all the new events
                .success(function(data) {
                    $scope.events = data; // assign our new list of events
                });
        };
    });
