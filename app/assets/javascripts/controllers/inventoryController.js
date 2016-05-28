function InventoryController(VehicleService) {
  var ctrl = this;

  ctrl.vehicles = [];
 
  VehicleService.getInventory.then(function(response) {
    debugger
    ctrl.vehicles = response;
  });
  // ctrl.dropdown.value = 'all';

}

angular
  .module('app')
  .controller('InventoryController', InventoryController);