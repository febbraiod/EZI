function VehicleController(VehicleService) {
  var ctrl= this;

  this.vehicles = [];

  this.vehicles = VehicleService.getInventory;


}

angular
  .module('app')
  .controller('VehicleController', VehicleController);