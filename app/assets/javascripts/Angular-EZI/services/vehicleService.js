function VehicleService($resource){

    var Vehicle = $resource('http://localhost:3000/api/v1/vehicles/:id', {id: '@id'});

    this.getInventory = Vehicle.query(function(){});

    // i wanted to use the following so I could reuse the service 
    // in both the vehicile controller and the inventory controller
    // but it screwed up the inventory page(no vehicles would load)
    // why?
    // this.getVehicle =  Vehicle.get({ stock_no: $stateParams.stock_no });

    this.getVehicle =  function(id){
      return Vehicle.get({ id: id });
    };


}

angular
  .module('app')
  .service('VehicleService', VehicleService);
