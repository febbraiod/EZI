function StatusController($stateParams, $state, noteService) {
  // var ctrl = this;
  // ctrl.vehicle_id = $stateParams.id;

  // ctrl.vehicle_notes = [];
  
  // ctrl.note = new Note();

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