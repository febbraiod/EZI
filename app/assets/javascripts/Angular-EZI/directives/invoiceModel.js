function invoiceModel(){
  return {
    link: function(scope, element, attrs){

      element.bind('change', function(){
        ctrl.vehicle.invoice = element[0].files[0];
      });
    }
  };
}


angular
  .module('app')
  .directive('invoiceModel', invoiceModel);