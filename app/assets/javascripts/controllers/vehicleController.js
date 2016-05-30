function VehicleController($scope, vehicle_data) {
  this.vehicle_data = vehicle_data;
  this.vehicle_notes = [];

  // this.vehicle_notes = vehicle_data.vehicle.notes;
}

angular
  .module('app')
  .controller('VehicleController', VehicleController);