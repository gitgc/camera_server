angular.module('eventsService', [])

    // super simple service
    // each function returns a promise object
    .factory('Events', function($http) {
        return {
            get : function() {
                return $http.get('api/events');
            },
            create : function(eventData) {
                return $http.post('api/events', eventData);
            },
            delete : function(eventId) {
                return $http.delete('api/events/' + eventId);
            }
        };
    });
