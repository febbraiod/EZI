function AuthCtrl($scope, $state, Auth){

  var config = {
      headers: {
          'X-HTTP-Method-Override': 'POST'
      }
  };

  // scope works but using 'this' didn't why?
  $scope.login = function() {
    Auth.login($scope.user, config).then(function(){
      $state.go('inventory');
    });
  };

  // getting 422 unprossable entity..
  // thinking about over writing Devise's Registration controller
  $scope.register = function() {
    Auth.register($scope.user).then(function(){
      $state.go('inventory');
    });
  };
}

angular
  .module('app')
  .controller('AuthCtrl', AuthCtrl);
