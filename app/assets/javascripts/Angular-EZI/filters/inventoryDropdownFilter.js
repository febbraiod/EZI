function inventoryDropdownFilter(){
  return function(filteredList, dropdownvalue){
    if(dropdownvalue === undefined){
      return true;
    }else{
      return filteredList.filter(function(vehicle){

        if(dropdownvalue === 'New' || dropdownvalue === 'Used'){
          return vehicle.new_or_used === dropdownvalue;
        }else if(dropdownvalue === 'moonroof'){
          if(vehicle.options){
            return vehicle.options.indexOf("moonroof") > -1 || vehicle.options.indexOf("Moonroof") > -1 || vehicle.options.indexOf("sunroof") > -1 || vehicle.options.indexOf("Sunroof") > -1 ||  vehicle.options.indexOf("Vista Roof");
          }else{
            return false;
          }
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