angular.module('ASNApp', [])
    .controller('ASNCtrl', function($scope) {
        $scope.foo = 'Hello World';
    });

  angular.bootstrap(document, ['ASNApp']);