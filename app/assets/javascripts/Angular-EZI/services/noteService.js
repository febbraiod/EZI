function NoteService($resource){

    var Note = $resource('http://localhost:3000/api/v1/notes/:id', {id: '@id'});

}

angular
  .module('app')
  .service('noteService', NoteService);
