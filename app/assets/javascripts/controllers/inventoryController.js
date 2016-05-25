function InventoryController(VehicleService) {
  var ctrl= this;

  ctrl.vehicles = [];
  ctrl.vehicles = VehicleService.getInventory;

}

angular
  .module('app')
  .controller('InventoryController', InventoryController);