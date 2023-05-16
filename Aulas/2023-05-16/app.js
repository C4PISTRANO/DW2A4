var app = angular.module("App", ["ngroute"]);

app.config(function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "template/home.html"
        })
        .when("/", {
            templateUrl: "template/p1.html"
        })
        .when("/", {
            templateUrl: "template/p2.html"
        })
        .when("/", {
            templateUrl: "template/p3.html"
        })

        .otherwise({redirectTo: "/"})
    })