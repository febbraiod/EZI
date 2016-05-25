function inventoryDropdownFilter(){
  return function(vehicles, dropdownvalue){
    //vehicles ctrl.vehicles
    //dropdownvalue = 'used'

    if(dropdownvalue === undefined){
      return true;
    }else{
      return vehicles.filter(function(vehicle){

        if(dropdownvalue === 'New' || dropdownvalue === 'Used'){
          return vehicle.new_or_used === dropdownvalue;
        }else{
          return true;
        }
      });
    }

  };
}

angular
  .module('app')
  .filter('inventoryDropdownFilter', inventoryDropdownFilter);