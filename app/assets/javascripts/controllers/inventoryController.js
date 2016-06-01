function InventoryController(inventoryService) {
  var ctrl = this;

  ctrl.vehicles = [];
 
  inventoryService.getInventory.then(function(response) {
    ctrl.vehicles = response;
  });

}

angular
  .module('app')
  .controller('InventoryController', InventoryController);