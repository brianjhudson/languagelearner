angular.module("languageApp", ["ui.router", "ui.materialize"])
.config(function($urlRouterProvider, $stateProvider) {
  $urlRouterProvider.otherwise("shop");
  $stateProvider
    .state("home", {
    controller: "userController"
    , url: "/"
    , templateUrl: "./views/home.html"
  })

  .state("user", {
    controller: "userController"
    , url: "/user"
    , templateUrl: "./views/user.html"
  })

  $urlRouterProvider.otherwise("/");
  });
