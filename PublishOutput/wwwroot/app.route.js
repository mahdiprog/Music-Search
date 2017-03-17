(function() {
    'use strict';
    var app = angular.module("app");
    app.config(function($routeProvider) {
        $routeProvider
            .when("/", {
                templateUrl: "pages/search.html"
            })
            .when("/search", {
                templateUrl: "pages/search.html"
            })
            .when("/artist/:id", {
                templateUrl: "pages/artist.html"
            });
    });
})();