(function(module) {

    function WhoweareCtrl($scope, apiService, $modal, $cookies) {
        var vm = this;
        vm.whoweare = null;
        vm.images = null;
        vm.loggedIn = $cookies.get('loggedIn');
        getWhoweare();
        getImages();

        function getWhoweare() {
            apiService.whoweareData().then(function(results) {
                vm.whoweare = results;
            });
        }

        function getImages() {
            apiService.whoweareImages().then(function(results) {
                vm.images = results;
            });
        }
        vm.editWhoweare = function(whoweare, index) {
            $scope.whoweare = angular.copy(whoweare);
            $scope.index = index;

            $modal.open({
                templateUrl: 'app/whoweare/memberEdit.html',
                controller: 'MemberEditCtrl',
                controllerAs: 'vm',
                scope: $scope
            }).result.finally(function() {
                getWhoweare();
            });
        };

    }


    module.controller('WhoweareCtrl', WhoweareCtrl);
})(angular.module('app.whoweare'));
