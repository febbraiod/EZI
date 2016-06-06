function InventoryController($filter, inventoryService, vehicles) {
  var ctrl = this;

  ctrl.vehicles = vehicles;

  ctrl.search = '';
  ctrl.dropdown = 'all';

  ctrl.refilter =  function(){
    ctrl.filteredList  = $filter('filter')(ctrl.vehicles, ctrl.search);
    ctrl.filteredList = $filter('inventoryDropdownFilter')(ctrl.filteredList, ctrl.dropdown);
    ctrl.firstVehicle = 0;
    ctrl.lastVehicle = 31;
    ctrl.pageVehicles = ctrl.filteredList.slice(ctrl.firstVehicle, ctrl.lastVehicle);
  };

  ctrl.refilter();

  ctrl.totalVehicles = ctrl.filteredList.length;

  ctrl.nextPage = function(){
    ctrl.firstVehicle += 30;
    ctrl.lastVehicle += 30;
    ctrl.pageVehicles = ctrl.filteredList.slice(ctrl.firstVehicle, ctrl.lastVehicle);
  };

  ctrl.prevPage = function(){
    ctrl.firstVehicle -= 30;
    ctrl.lastVehicle -= 30;
    ctrl.pageVehicles = ctrl.filteredList.slice(ctrl.firstVehicle, ctrl.lastVehicle);
  };
 
}

angular
  .module('app')
  .controller('InventoryController', InventoryController);