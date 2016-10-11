angular.module("languageApp", ["ui.router", "ui.materialize"])
.config(function($urlRouterProvider, $stateProvider) {
  $urlRouterProvider.otherwise("shop");
  $stateProvider
    .state("home", {
    controller: userController
    , url: "/"
    , template: homeHtml
  })

  .state("login", {
    controller: userController
    , url: "/login"
    , template: loginHtml
  })

  .state("user", {
    controller: userController
    , url: "/user"
    , template: userHtml
  })

  $urlRouterProvider.otherwise("/");
  });
