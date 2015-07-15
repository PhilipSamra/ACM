(function (module) {

    function EventsCtrl($scope, apiService, $modal, $cookies) {
        var vm = this;
        vm.events = null;
        vm.images = null;

        getEvents();
        getImages();

        function getEvents() {
            apiService.eventsData().then(function (results) {
                vm.events = results;
            });
        }

        function getImages() {
            apiService.eventsImages().then(function (results) {
                vm.images = results;
            });
        }

    }

    module.controller('EventsCtrl', EventsCtrl);
})(angular.module('app.events'));
