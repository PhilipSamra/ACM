(function(module) {

    function WhoweareCtrl($scope) {
        var vm = this;

        vm.officers = [
        	"President: Peter Kuebler",
        	"Vice President: Philip Samra",
        	"Secretary: Brianna Navero"
        ];
        vm.faculty = [
			"Dr. Lin-Ching Chang",
            "Dr. Esam El-Araby"
        ]
       
    }

    module.controller('WhoweareCtrl', WhoweareCtrl);
})(angular.module('app.whoweare'));
