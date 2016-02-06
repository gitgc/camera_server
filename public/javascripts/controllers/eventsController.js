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

        // CREATE ==================================================================
        // when submitting the add form, send the text to the node API
        $scope.createEvent = function() {

            // validate the formData to make sure that something is there
            // if form is empty, nothing will happen
            // people can't just hold enter to keep adding the same to-do anymore
            if (!$.isEmptyObject($scope.formData)) {

                // call the create function from our service (returns a promise object)
                Events.create($scope.formData)

                    // if successful creation, call our get function to get all the new events
                    .success(function(data) {
                        $scope.formData = {}; // clear the form so our user is ready to enter another
                        $scope.events = data; // assign our new list of events
                    });
            }
        };

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
