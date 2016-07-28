function InventoryController($filter, inventoryService, vehicles) {
  var ctrl = this;

  ctrl.vehicles = vehicles;

  ctrl.search = '';
  ctrl.dropdown = 'all';

  ctrl.refilter = function(){
    ctrl.filteredList  = $filter('filter')(ctrl.vehicles, ctrl.search);
    ctrl.filteredList = $filter('inventoryDropdownFilter')(ctrl.filteredList, ctrl.dropdown);
    ctrl.totalVehicles = ctrl.filteredList.length;
    ctrl.firstVehicle = 0;
    if(ctrl.totalVehicles < 30){
      ctrl.lastVehicle = ctrl.totalVehicles + 1;
    }else{
      ctrl.lastVehicle = 31;
    }
    ctrl.pageVehicles = ctrl.filteredList.slice(ctrl.firstVehicle, ctrl.lastVehicle);
  };

  ctrl.refilter();

  ctrl.nextPage = function(){
    ctrl.firstVehicle += 30;
    ctrl.lastVehicle += 30;
    if(ctrl.lastVehicle > ctrl.totalVehicles){
      ctrl.lastVehicle = ctrl.totalVehicles + 1;
    }
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