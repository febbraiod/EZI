function InventoryController(VehicleService) {
  var ctrl= this;

  ctrl.vehicles = [];
  ctrl.vehicles = VehicleService.getInventory;
  // ctrl.dropdown.value = 'all';

}

angular
  .module('app')
  .controller('InventoryController', InventoryController);