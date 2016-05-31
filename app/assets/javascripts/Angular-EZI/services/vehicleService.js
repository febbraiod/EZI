function vehicleService($resource, $http){

    Vehicle = $resource('http://localhost:3000/api/v1/vehicles/:id', {id: '@id'});

      // return $resource('api/users/:userId/privileges', 
      //                    {userId: '@id'}, 
      //                    {'query':  {method:'GET', isArray:false}}); <<-- didnt work

  

    this.getInventory = $http({ method: 'GET', url: 'http://localhost:3000/api/v1/vehicles'})
                        .then(function successCallback(response) {
                          return response.data.vehicles;
                        }, function errorCallback(response) {
                          alert('error! see console log');
                          console.log(response);
                        });
      

    // i wanted to use the following so I could reuse the service 
    // in both the vehicile controller and the inventory controller
    // but it screwed up the inventory page(no vehicles would load)
    // why?:
    // this.getVehicle =  Vehicle.get({ stock_no: $stateParams.stock_no });

    this.getVehicle =  function(id){
      return Vehicle.get({ id: id });
    };


}

angular
  .module('app')
  .service('vehicleService', vehicleService);
