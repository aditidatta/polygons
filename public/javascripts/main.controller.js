var app = angular.module('polygons', ['ui.router']);

app.controller('MainCtrl', [
    '$scope',
    function($scope) {
        $scope.test = 'Welcome to Polygons.me!';
    }
]);

myApp.config(function($stateProvider) {
    var home = {
        name: 'home',
        url: '/home',
        template: '<h3>Welcome to Polygons.me</h3>'
    }

    var algo = {
        name: 'algo',
        url: '/algo',
        template: '<h3>List of Algorithms</h3>'
    }

    var research = {
        name: 'research',
        url: '/research',
        template: '<h3>My dissertation paper</h3>'
    }

    var projects = {
        name: 'projects',
        url: '/projects',
        template: '<h3>List of Projects</h3>'
    }

    $stateProvider.state(home);
    $stateProvider.state(algo);
    $stateProvider.state(research);
    $stateProvider.state(projects);
});