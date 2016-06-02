function vehicleService($http, $resource, $stateParams){
    
  Vehicle = $resource('http://localhost:3000/api/v1/vehicles/:id.json', {id: '@id'});

  this.getVehicle = function(){
                    return $http({ method: 'GET', url: 'http://localhost:3000/api/v1/vehicles/' + $stateParams.id});
                    };

  this.updateVehicle = function(data){
                       return $http.patch('http://localhost:3000/api/v1/vehicles/' + $stateParams.id, data);
                      };



}

angular
  .module('app')
  .service('vehicleService', vehicleService);
