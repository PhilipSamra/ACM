(function(module) {

    function service(jsend) {

        function adminLogin(data) {
            return jsend({
                method: 'POST',
                url: '/api/admin',
                data: data
            }).then(
                function(response) {
                    return response.data;
                }
            );
        }

        function brotherLogin(data) {
            return jsend({
                method: 'POST',
                url: '/api/home',
                data: data
            }).then(
                function(response) {
                    return response.data;
                }
            );
        }

        return {
            adminLogin: adminLogin,
            brotherLogin: brotherLogin
        };
    }

    module.factory('authService', service);
})(angular.module('app'));