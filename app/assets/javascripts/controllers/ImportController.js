function ImportController($location, vehicleService) {
  ctrl = this;

  // move to import_service:
  // ctrl.vehicle = new Vehicle();
  ctrl.vehicle = {};

  ctrl.addVehicle = function(){
    vehicleService.addVehicle(ctrl.vehicle);
  };

}

angular
  .module('app')
  .controller('ImportController', ImportController);

