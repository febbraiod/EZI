function UserService($http){

  // use $resource
  this.getUser = function(name){
    // $http.get('http://0.0.0.0:8882/rest/user' + name); this needs to call my rails api for users
  };

}

angular
  .module('app')
  .service('UserService', UserService);