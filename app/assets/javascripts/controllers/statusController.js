function StatusController($stateParams, $state, statusService) {
  var ctrl = this;
  ctrl.vehicle_id = $stateParams.id;
  // current_user can be used on the server side in rails(is this ok?)
  
  ctrl.status = new Status();

  // in the future i'd like to find a way to just get back 
  // the statuses that are NOT set to 'available' instead of filtering them out in the view.
  ctrl.status_obj = Status.query();

  ctrl.changeStatus = function(){
    ctrl.status.vehicle_id = ctrl.vehicle_id;
    ctrl.status.$save(function(){
      $state.reload();
    });
  };


}

angular
  .module('app')
  .controller('StatusController', StatusController);