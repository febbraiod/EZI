function NoteController($stateParams, noteService) {
  var ctrl = this;
  
  ctrl.note = new Note();
  ctrl.vehicle_id = $stateParams.id;
  // ctrl.user = $scope.user;

  ctrl.addNote = function() {
    ctrl.note.vehicle_id = ctrl.vehicle_id;
    debugger
    ctrl.note.$save(function(resp) {
      debugger
    });
  };

}

angular
  .module('app')
  .controller('NoteController', NoteController);