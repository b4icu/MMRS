var tableApp = angular.module("RecipeApp", ["ngRoute", "ngAnimate", "ui.bootstrap"]);

var tableApp = angular.module("RecipeApp", ["ngRoute", "ngAnimate", "ui.bootstrap"]);

tableApp.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "app/home/home.html",
            controller: "HomeCtrl"
        })
        .when("/main", {
            templateUrl: "app/pages/main.html",
            controller: "MainCtrl"
        })
        .when("/reservation", {
            templateUrl: "app/pages/reservation.html",
            //controller: "ReservCtrl"
        })
        .when("/cancelation", {
            templateUrl: "app/pages/cancelation.html",
            //controller: "CancelCtrl"

        }).when("/display", {
            templateUrl: "app/pages/display.html",
            controller: "DisplayCtrl"            
        })
        .otherwise({
            redirectTo: "/"
          });

});





// TODO: Delete this TESTINGGGGGGGGGG
tableApp.controller("TestCtrl", function ($scope, User, activeUser, Recipe, recipes) {
    var plainUser = {
        "email": "lang_m@012.net.il",
        "password": "langm",
        "firstName": "Michael",
        "lastName": "Lang",
        "data": "nir-recipes.json"
    }


    var user = new User(plainUser);

    console.log(JSON.stringify(user));
    console.log(activeUser.isLoggedIn());
    activeUser.login(user);
    console.log(JSON.stringify(activeUser.get()));
    console.log(activeUser.isLoggedIn());
    activeUser.logout();
    console.log(activeUser.isLoggedIn());


   
});

