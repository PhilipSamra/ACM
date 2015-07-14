(function(module) {

    function AdminCtrl($scope, $modalInstance, $cookies, authService) {
        var vm = this;

        vm.login = function() {
            var data = {
                username: vm.username,
                password: vm.password
            };

            authService.adminLogin(data).then(function(response) {
                if (response) {
                    $modalInstance.close();
                    $cookies.put('loggedIn', true);
                    alert("You are now signed in as Admin");
                } else {
                    alert("Wrong Username and Password Combination");
                }
            });
        };

        vm.cancel = function() {
            $modalInstance.dismiss();
        };

    }

    module.controller('AdminCtrl', AdminCtrl);
})(angular.module('app'));