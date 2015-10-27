var userDirectives = angular.module('userDirectives', []);

userDirectives.directive('back', function ($window) {
    return {
        restrict: 'A',
        link: function (scope, elem) {
            elem.on('click', function () {
                $window.history.back();
            });
        }
    };
});