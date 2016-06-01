function VehicleController($scope, vehicleService) {
  ctrl = this;

  vehicleService.getVehicle.then(function(response) {
    ctrl.vehicle = response;
  });

  this.updateVehicle = function(){
    vehicleService.updateVehicle();
  };

}

angular
  .module('app')
  .controller('VehicleController', VehicleController);
