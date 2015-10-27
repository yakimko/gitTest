'use strict';

var userControllers = angular.module('userControllers', []);

userControllers.controller('UserListCtrl', function ($scope, Users) {
    $scope.users = Users.query();
});

userControllers.controller('UserCtrl', function ($scope, Users, Repos, $routeParams) {
    var data = {
        username: $routeParams.username
    };

    $scope.user = Users.get(data);

    $scope.repos = Repos.query(data);
});


userControllers.controller('UserRepoCtrl', function ($scope, Repo, Branches, Commits, $routeParams) {
    var data = {
        owner: $routeParams.owner,
        repo: $routeParams.repo
    };

    $scope.commits = [];

    $scope.author = Repo.get(data);

    $scope.author.$promise.then(function (result) {
        $scope.author = result.owner.login;
    });

    $scope.branches = Branches.query(data);

    $scope.showCommits = function () {
        $scope.commits = Commits.query(data);
    }
});