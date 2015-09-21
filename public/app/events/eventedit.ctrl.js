(function(module) {

    function EventCtrl($scope, $modalInstance, apiService) {
        var vm = this;
        vm.event = $scope.event;
        vm.type = $scope.type;

        vm.submit = function() {
            var data = {
                event: vm.event,
                index: $scope.index
            };

            if ($scope.type === "Add") {
                apiService.addEvent(data).then(function() {
                    $modalInstance.close();
                });
            } else {
                apiService.editEvent(data).then(function() {
                    $modalInstance.close();
                });
            }
        };

        vm.cancel = function() {
            $modalInstance.dismiss();
        };

    }

    module.controller('EventCtrl', EventCtrl);
})(angular.module('app.events'));