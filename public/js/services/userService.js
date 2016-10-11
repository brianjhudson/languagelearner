angular.module("languageApp").service("userService", function($http) {
  this.getUser = () => {
    return $http.get("/user")
  }
})
