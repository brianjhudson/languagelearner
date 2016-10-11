angular.module("languageApp", ["ui.router", "ui.materialize"])
.config(function($urlRouterProvider, $stateProvider) {
  $urlRouterProvider.otherwise("shop");
  $stateProvider
    .state("home", {
    controller: "userController"
    , url: "/"
    , template: "./views/home.html"
  })

  .state("login", {
    controller: "userController"
    , url: "/login"
    , template: "./views/login.html"
  })

  .state("user", {
    controller: "userController"
    , url: "/user"
    , template: "./views/user.html"
  })

  $urlRouterProvider.otherwise("/");
  });
