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
        }else if(dropdownvalue === 'moonroof'){
          return vehicle.options.indexOf("moonroof") > -1 || vehicle.options.indexOf("Moonroof") > -1 || vehicle.options.indexOf("sunroof") > -1 || vehicle.options.indexOf("Sunroof") > -1 ||  vehicle.options.indexOf("Vista Roof");
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