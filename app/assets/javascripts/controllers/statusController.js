function StatusController($stateParams, $state, statusService) {
  var ctrl = this;
  ctrl.vehicle_id = $stateParams.id;
  // current_user can be used on the server side in rails(is this ok?)
  
  ctrl.status = new Status();

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