function userService($resource){

  User = $resource('http://localhost:3000/api/v1/users/:id.json', {id: '@id'}, {query: {
      method: 'GET',
      isArray: false}});

  this.getUsers = function(){
    return User.query();
  };

  this.getUser = function(name){
    return User.get({ id: name });
  };


}

angular
  .module('app')
  .service('userService', userService);