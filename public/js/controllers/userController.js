angular.module("languageApp").controller("userController", function($scope, userService) {
  $scope.test = "Controller Working";
  $scope.serviceTest = userService.test;
})
