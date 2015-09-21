(function(module) {

    function MemberEditCtrl($scope, $modalInstance, apiService) {
        var vm = this;
        vm.whoweare = $scope.whoweare;
        vm.index = $scope.index;

        vm.submit = function() {
            var data = {
                whoweare: vm.whoweare,
                index: vm.index
            };

            apiService.editWhoweare(data).then(function() {
                $modalInstance.close();
            });
        };

        vm.cancel = function() {
            $modalInstance.dismiss();
        };

    }

    module.controller('MemberEditCtrl', MemberEditCtrl);
})(angular.module('app.whoweare'));