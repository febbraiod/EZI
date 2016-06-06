function InventoryController($filter, inventoryService, vehicles) {
  var ctrl = this;

  ctrl.vehicles = vehicles;

  ctrl.search = '';
  ctrl.dropdown = 'all';

  ctrl.refilter =  function(){
     this.filteredList  = $filter('filter')(ctrl.vehicles, ctrl.search);
     this.filteredList = $filter('inventoryDropdownFilter')(this.filteredList, ctrl.dropdown);
  };

  ctrl.refilter();
 
}

angular
  .module('app')
  .controller('InventoryController', InventoryController);