function VehicleController($scope, $state, vehicleService) {
  ctrl = this;

  vehicleService.getVehicle().then(function(resp) {
    ctrl.vehicle = resp.data.vehicle;
  }, function(error) {
    alert('error see console log');
    console.log(error);
  });

  var data = ctrl.vehicle

  this.updateVehicle = function(){
    vehicleService.updateVehicle(ctrl.vehicle).then(function(resp) {
    ctrl.vehicle = resp.data.vehicle;
    alert('Vehicle Successfully Update');
  }, function(error) {
    alert('error see console log');
    console.log(error);
  });
  };

}

angular
  .module('app')
  .controller('VehicleController', VehicleController);
