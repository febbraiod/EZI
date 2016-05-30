angular
  .module('app')
  .controller('SessionController', [
      '$scope',
      'Auth',
      '$state',
      function($scope, Auth, $state){
          var session = this;
          session.current_user = 'unset';
          session.userrole = 'unset';

          session.signedIn = Auth.isAuthenticated;
          session.logout = Auth.logout;

          Auth.currentUser().then(function (user){
            $scope.user = user;
          });

          $scope.$on('devise:new-registration', function (e, user){
            $scope.user = user;
          });

          $scope.$on('devise:login', function (e, user){
            session.userrole = user.role;
            session.current_user = user;
            $scope.user = user;
          });

          $scope.$on('devise:logout', function (e, user){
            $scope.user = {};
            $state.go('welcome');
            session.current_user = 'unset';
            session.userrole = 'unset';
          });

      }]);

// Started with this but it threw an error 
// sucks because i like this format better:

//function SessionController($scope, Auth){
//   session = this;

//   session.signIn = Auth.isAuthenticated;
//   session.logout = Auth.logout;

//   Auth.currentUser().then(function (user){
//     $scope.user = user;
//   });

//   $scope.$on('devise:new-registration', function (e, user){
//     $scope.user = user;
//     alert('Welcome Guest');
//     debugger
//   });

//   $scope.$on('devise:login', function (e, user){
//     $scope.user = user;
//   });

//   $scope.$on('devise:logout', function (e, user){
//     $scope.user = {};
//   });


// }

// AuthCtrl.$inject = ['$scope', 'Auth'];

// angular
//   .module('app')
//   .controller('SessionController', SessionController);