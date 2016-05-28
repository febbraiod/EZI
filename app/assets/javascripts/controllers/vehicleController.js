function VehicleController(vehicle_data) {
  this.vehicle_data = vehicle_data;
}

angular
  .module('app')
  .controller('VehicleController', VehicleController);