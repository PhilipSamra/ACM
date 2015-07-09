(function () {
    var module = angular.module('app.whoweare', []);

    function config($stateProvider) {
        $stateProvider
            .state('app.whoweare', {
                url: '/whoweare',
                views: {
                    'content@': {
                        templateUrl: 'app/whoweare/whoweare.html'
                    }
                }
            })
           
    }

    module.config(config);
})();
