function VehicleService($http){

  this.getVehicles = function(name){
    // $http.get('http://0.0.0.0:8882/rest/vehicle); 
    // this needs to call my rails api for all vehicles
    // so i can pass it to the vehicle controller
  };

}

angular
  .module('app')
  .service('VehicleService', VehicleService);