(function(module) {

    function HeaderCtrl($scope, $location) {
        var vm = this;

        vm.state = 4;

        vm.setState = function(index) {
            vm.state = index;
        };

        vm.glyphs = [
            "fa fa-home",
            "fa fa-calendar",
            "fa fa-info-circle",
            "fa fa-users"
        ];

        vm.pages = [
            "home",
            "events",
            "info",
            "whoweare"
        ];

        vm.isActive = function(viewLocation) {
            return viewLocation === $location.path();
        };
    }

    module.controller('HeaderCtrl', HeaderCtrl);
})(angular.module('app'));
