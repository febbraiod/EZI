function StatusController($stateParams, $state, statusService) {
  var ctrl = this;
  ctrl.vehicle_id = $stateParams.id;
  // current_user can be used on the server side in rails(is this ok?)
  
  ctrl.status = new Status();


  // this might need to just be an update on the exhisting status
  ctrl.changeStatus = function(){
    ctrl.status.vehicle_id = ctrl.vehicle_id;
    ctrl.status.$save(function(){
      $state.reload();
    });
  };

  // ctrl.addNote = function() {
  //   ctrl.note.vehicle_id = ctrl.vehicle_id;
  //   ctrl.note.$save(function() {
  //     $state.reload();
  //   });
  // };

  // ctrl.removeNote = function(note){
  //   ctrl.note.id = note.id;
  //   ctrl.note.$delete(function() {
  //     $state.reload();
  //   });
  // };



}

angular
  .module('app')
  .controller('StatusController', StatusController);