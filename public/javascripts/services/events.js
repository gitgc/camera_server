angular.module('eventsService', [])
    .factory('Events', function($http) {
        return {
            listAll : function() {
                return $http.get('/api/events');
            },
            get : function(eventId) {
                return $http.get('/api/events/' + eventId);
            },
            delete : function(eventId) {
                return $http.delete('/api/events/' + eventId);
            }
        };
    });
