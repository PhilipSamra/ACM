(function(module) {

    function HeaderCtrl($scope, $location) {
        var vm = this;

        vm.state = 4;

        vm.setState = function(index) {
            vm.state = index;
        };

        vm.glyphs = [
            "ion-ios-americanfootball-outline",
            "ion-ios-baseball-outline",
            "ion-ios-basketball-outline",
            "ion-ios-football-outline"
        ];

        vm.pages = [
            "homepage",
            "events",
            "information",
            "who we are"
        ];

        vm.isActive = function(viewLocation) {
            return viewLocation === $location.path();
        };
    }

    module.controller('HeaderCtrl', HeaderCtrl);
})(angular.module('app'));
