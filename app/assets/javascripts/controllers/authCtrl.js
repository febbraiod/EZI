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

  $scope.register = function() {
    Auth.register($scope.user).then(function(){
      $state.go('home');
    });
  };
}

angular
  .module('app')
  .controller('AuthCtrl', AuthCtrl);
