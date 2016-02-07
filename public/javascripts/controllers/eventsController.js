angular.module('eventsController', [])
    .controller('mainController', function($scope, $http, Events) {
        $scope.formData = {};

        Events.get()
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
