(function(module) {

    function WhoweareCtrl($scope, apiService, $modal, $cookies) {
       var vm = this;
        vm.whoweare = null;
        vm.images = null;

        getWhoweare();
        getImages();

        function getWhoweare() {
            apiService.whoweareData().then(function (results) {
                vm.whoweare = results;
            });
        }

        function getImages() {
            apiService.whoweareImages().then(function (results) {
                vm.images = results;
            });
        }

    }


    module.controller('WhoweareCtrl', WhoweareCtrl);
})(angular.module('app.whoweare'));
