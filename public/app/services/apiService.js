(function (module) {

    function service(jsend) {

        function eventsData() {
            return jsend({
                method: 'GET',
                url: '/api/events-data'
            }).then(
                function (response) {
                    return response.data;
                }
            );
        }
         function whoweareData() {
            return jsend({
                method: 'GET',
                url: '/api/whoweare-data'
            }).then(
                function (response) {
                    return response.data;
                }
            );
        }

        function addEvent(data) {
            return jsend({
                method: 'POST',
                url: '/api/events-data',
                data: data
            });
        }

        function editEvent(data) {
            return jsend({
                method: 'PUT',
                url: '/api/events-data',
                data: data
            });
        }

        function deleteEvent(data) {
            return jsend({
                method: 'DELETE',
                url: '/api/events-data/' + data
            });
        }

        function eventsImages() {
            return jsend({
                method: 'GET',
                url: '/api/events-images'
            }).then(
                function (response) {
                    return response.data;
                }
            );
        }

        function whoweareImages() {
            return jsend({
                method: 'GET',
                url: '/api/whoweare-images'
            }).then(
                function (response) {
                    return response.data;
                }
            );
        }

        function editWhoweare(data) {
            return jsend({
                method: 'PUT',
                url: '/api/whoweare-Data',
                data: data
            });
        }
        return {
            eventsData: eventsData,
            addEvent: addEvent,
            editEvent: editEvent,
            deleteEvent: deleteEvent,
            eventsImages: eventsImages,
            whoweareData:whoweareData,
            whoweareImages:whoweareImages,
            editWhoweare: editWhoweare
        };
    }

    module.factory('apiService', service);
})(angular.module('app'));
