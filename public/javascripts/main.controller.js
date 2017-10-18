var app = angular.module('polygons', []);


app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider.
    when('/home', { template: 'Home', controller: HomeCtrl }).
    when('/algo', { template: 'Algorithms', controller: AlgoCtrl }).
    when('/research', { template: 'My Dissertation Paper', controller: ResearchCtrl }).
    when('/projects', { template: 'Projects', controller: ProjCtrl }).
    otherwise({ redirectTo: 'home' });
    $locationProvider.html5Mode(true);
}]);

app.factory('Page', function() {
    var title = 'default';
    return {
        title: function() { return title; },
        setTitle: function(newTitle) { title = newTitle; }
    };
});

function MainCtrl($scope, Page) {
    $scope.Page = Page;
}

function HomeCtrl($scope, Page) {
    Page.setTitle('Home');
}

function AlgoCtrl($scope, Page) {
    Page.setTitle('Algorithms');
}

function ResearchCtrl($scope, Page) {
    Page.setTitle('Research');
}

function ProjCtrl($scope, Page) {
    Page.setTitle('Projects');
}

/*
app.controller('MainCtrl', [
    '$scope',
    function($scope) {
        $scope.test = 'Welcome to Polygons.me!';
    }
]);

app.config(function($stateProvider) {
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
*/