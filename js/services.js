'use strict';

var userServices = angular.module('userServices', ['ngResource']);

userServices.factory('Users', function ($resource) {
    return $resource('https://api.github.com/users/:username');
});

userServices.factory('Repos', function ($resource) {
    return $resource('https://api.github.com/users/:username/repos');
});

userServices.factory('Repo', function ($resource) {
    return $resource('https://api.github.com/repos/:owner/:repo');
});

userServices.factory('Branches', function ($resource) {
    return $resource('https://api.github.com/repos/:owner/:repo/branches');
});

userServices.factory('Commits', function ($resource) {
    return $resource('https://api.github.com/repos/:owner/:repo/commits');
});