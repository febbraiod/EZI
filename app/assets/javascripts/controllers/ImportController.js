function ImportController($location, vehicleService) {
  ctrl = this;
  ctrl.vehicle = new Vehicle();

    // need to add default status when this fires
  this.addVehicle = function() {
    ctrl.vehicle.$save(function(resp) {
      $location.path('vehicle/' + resp.vehicle.id);
    }, function(err){
      alert('Vehicle not added, see console log');
      console.log(err);
    });
  };

}

angular
  .module('app')
  .controller('ImportController', ImportController);

