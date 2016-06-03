function vehicleService($http, $resource, $stateParams){
    
  // Vehicle = $resource('http://localhost:3000/api/v1/vehicles/:id.json', {id: '@id'});

  this.addVehicle = function(data){
    debugger
    var fd = new FormData();
    for(var key in data){
      fd.append(key, data[key]);
      debugger
    }
    debugger
    return $http.post('http://localhost:3000/api/v1/vehicles/', fd,
    {
      transformRequest: angular.identity, 
      headers: {'Content-Type': undefined}
    }
    );
  };


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
