function UserController(user) {
  // this.data = user.data; not sure about the user object until i fix my api calls
  this.data = user;
}

angular
  .module('app')
  .controller('UserController', UserController);