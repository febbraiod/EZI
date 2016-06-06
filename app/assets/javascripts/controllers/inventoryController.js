function InventoryController(inventoryService, vehicles) {
  var ctrl = this;

  ctrl.vehicles = vehicles;
 
}

angular
  .module('app')
  .controller('InventoryController', InventoryController);