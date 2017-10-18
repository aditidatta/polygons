var app = angular.module('polygons', []);

app.controller('MainCtrl', [
    '$scope',
    function($scope) {
        $scope.test = 'Welcome to Polygons.me!';
    }
]);