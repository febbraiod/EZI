function VehicleController(VehicleService) {
  // this.data = user.data; not sure about the user object until i fix my api calls
  this.data = user;
}

angular
  .module('app')
  .controller('VehicleController', VehicleController);