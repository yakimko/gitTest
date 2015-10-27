'use strict';

var userApp = angular.module('userApp', [
    'userServices',
    'userDirectives',
    'userControllers',
    'ngRoute'
]);

userApp.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/users.html',
            controller: 'UserListCtrl',
            title: 'Users'
        })
        .when('/user/:username', {
            templateUrl: 'views/user.html',
            controller: 'UserCtrl',
            title: 'User info'
        })
        .when('/user/:owner/repo/:repo', {
            templateUrl: 'views/repo.html',
            controller: 'UserRepoCtrl',
            title: 'User repo info'
        });
});

userApp.run(function ($rootScope, $route) {
    $rootScope.$on('$routeChangeSuccess', function () {
        document.title = $route.current.title;
    });
});
