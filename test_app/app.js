angular.module('test-app', [])
    .controller('MainController', ['$http', '$scope', function ($http, $scope){
        $http.get('hello_world.json').then(function (res){
            $scope.text = res.data.text
        })
    }]);