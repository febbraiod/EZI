function InventoryController(vehicleService) {
  var ctrl = this;

  ctrl.vehicles = [];
 
  vehicleService.getInventory.then(function(response) {
    ctrl.vehicles = response;
  });
  // ctrl.dropdown.value = 'all';

}

angular
  .module('app')
  .controller('InventoryController', InventoryController);