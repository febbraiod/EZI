function VehicleController(vehicle) {
  this.data = vehicle;
}

angular
  .module('app')
  .controller('VehicleController', VehicleController);