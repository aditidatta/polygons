var app = angular.module('polygons', []);

app.controller('MainStrl', [
    '$scope',
    function($scope) {
        $scope.test = 'Welcome to Polygons.me!';
    }
]);