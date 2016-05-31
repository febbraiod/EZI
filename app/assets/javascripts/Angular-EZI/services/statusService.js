function statusService($resource){

    Status = $resource('http://localhost:3000/api/v1/statuses/:id.json', {id: '@id'}, {query: {
      method: 'GET',
      isArray: false}});

}

angular
  .module('app')
  .service('statusService', statusService);

