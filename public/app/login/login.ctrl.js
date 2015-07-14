(function(module) {

    function LoginCtrl($scope, $modalInstance, $state, authService) {
        var vm = this;

        vm.login = function() {
            var data = {
                username: vm.username,
                password: vm.password
            };

            authService.memberLogin(data).then(function(response) {
                if (response) {
                    $modalInstance.close();
                    $state.go('app.whoweare');
                    alert("Welcome to the members page");
                } else {
                    alert("Wrong Username and Password Combination");
                }
            });
        };

        vm.cancel = function() {
            $modalInstance.dismiss();
        };

    }

    module.controller('LoginCtrl', LoginCtrl);
})(angular.module('app'));