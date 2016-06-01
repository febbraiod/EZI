function vehicleService($http, $stateParams){

  this.getInventory = $http({ method: 'GET', url: 'http://localhost:3000/api/v1/vehicles'})
                      .then(function successCallback(response) {
                        return response.data.vehicles;
                      }, function errorCallback(response) {
                        alert('error! see console log');
                        console.log(response);
                      });
    
  this.getVehicle = $http({ method: 'GET', url: 'http://localhost:3000/api/v1/vehicles/' + $stateParams.id})
                      .then(function successCallback(response) {
                        return response.data.vehicle;
                      }, function errorCallback(response) {
                        alert('error! see console log');
                        console.log(response);
                      });

  this.updateVehicle = function(data){
                      $http.patch('http://localhost:3000/api/v1/vehicles/' + $stateParams.id, data)
                      .then(function successCallback(response) {
                        return response.data.vehicle;
                      }, function errorCallback(response) {
                        alert('error! Vehicle Not Updated. See console log');
                        console.log(response);
                      });
                    };



}

angular
  .module('app')
  .service('vehicleService', vehicleService);
