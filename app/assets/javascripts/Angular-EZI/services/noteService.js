function noteService($resource, $http){

    Note = $resource('http://localhost:3000/api/v1/notes/:id.json', {id: '@id'});

}

angular
  .module('app')
  .service('noteService', noteService);

