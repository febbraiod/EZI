function VehicleController($scope, vehicleService) {
  ctrl = this;

  vehicleService.getVehicle.then(function(response) {
    ctrl.vehicle = response;
    $state.reload();
  });

  this.updateVehicle = function(){
    vehicleService.updateVehicle();
  };

}

angular
  .module('app')
  .controller('VehicleController', VehicleController);
