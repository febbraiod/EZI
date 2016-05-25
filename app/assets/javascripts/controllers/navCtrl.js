angular
  .module('app')
  .controller('NavCtrl', [
      '$scope',
      'Auth',
      '$state',
      function($scope, Auth, $state){
          var nav = this;
          nav.current_user = 'unset';
          nav.role = 'unset';

          nav.signedIn = Auth.isAuthenticated;
          nav.logout = Auth.logout;

          Auth.currentUser().then(function (user){
            $scope.user = user;
          });

          $scope.$on('devise:new-registration', function (e, user){
            $scope.user = user;
            alert('Welcome Guest');
          });

          $scope.$on('devise:login', function (e, user){
            nav.role = user.role;
            nav.current_user = user;
            $scope.user = user;
          });

          $scope.$on('devise:logout', function (e, user){
            $scope.user = {};
            $state.go('welcome');
          });

      }]);

// Started with this but it threw an error 
// sucks because i like this format better:

//function NavCtrl($scope, Auth){
//   nav = this;

//   nav.signIn = Auth.isAuthenticated;
//   nav.logout = Auth.logout;

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
//   .controller('NavCtrl', NavCtrl);