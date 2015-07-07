(function () {
    var module = angular.module('app.events', []);

    function config($stateProvider) {
        $stateProvider
            .state('app.events', {
                url: '/events',
                views: {
                    'content@': {
                        templateUrl: 'app/events/events.html'
                    }
                }
            })
           
    }

    module.config(config);
})();
