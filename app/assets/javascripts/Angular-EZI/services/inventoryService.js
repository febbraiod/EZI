function inventoryService($http, $stateParams){

  this.getInventory = $http({ method: 'GET', url: 'http://localhost:3000/api/v1/vehicles'})
                      .then(function successCallback(response) {
                        return response.data.vehicles;
                      }, function errorCallback(response) {
                        alert('error! see console log');
                        console.log(response);
                      });


}

angular
  .module('app')
  .service('inventoryService', inventoryService);
