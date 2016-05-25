function VehicleService($resource){

    var Vehicle = $resource('http://localhost:3000/api/v1/vehicles/:id');

    this.getInventory = Vehicle.query(function(){});


}

angular
  .module('app')
  .service('VehicleService', VehicleService);
