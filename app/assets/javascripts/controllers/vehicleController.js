function VehicleController($scope, vehicle_data, vehicleService) {
  this.vehicle_data = vehicle_data;
}

angular
  .module('app')
  .controller('VehicleController', VehicleController);