angular.module('eventsService', [])
    .factory('Events', function($http) {
        return {
            get : function() {
                return $http.get('api/events');
            },
            delete : function(eventId) {
                return $http.delete('api/events/' + eventId);
            }
        };
    });
