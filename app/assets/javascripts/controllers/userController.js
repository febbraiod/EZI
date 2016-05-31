function UserController($stateParams, userService) {
  // this.data = user.data; not sure about the user object until i fix my api calls
  this.user_list = userService.getUsers();

  this.user = userService.getUser($stateParams.name);

}

angular
  .module('app')
  .controller('UserController', UserController);