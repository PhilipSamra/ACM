(function () {
    var module = angular.module('app.info', []);
// This is how you load the soccer page
    function config($stateProvider) {
        $stateProvider
            .state('app.info', {
                url: '/info',
                views: {
                    'content@': {
                        templateUrl: 'app/info/info.html'
                    }
                }
            });
            }

    module.config(config);
})();
