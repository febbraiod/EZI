angular
  .module('app', ['ui.router', 'ngResource', 'templates', 'Devise'])
  .config(function($stateProvider, $urlRouterProvider, AuthProvider){
    $urlRouterProvider.otherwise("/");
    $stateProvider //at somepoint I need to add permissions: https://www.theodo.fr/blog/2015/08/handling-basic-route-authorization-in-angularjs/
      .state('welcome', {
        url: '/',
        templateUrl: 'welcome.html',
        // controller: 'WelcomeController'
      })
      .state('welcome.signin', {
        url: 'signin',
        templateUrl: 'signin.html',
        controller: 'AuthCtrl as ctrl',
        onEnter: ['$state', 'Auth', function($state, Auth){
            Auth.currentUser().then(function (){
                alert(Auth.currentUser());
                console.log(Auth.currentUser());
                $state.go('inventory');
            });
         }]
      })
      .state('welcome.signup', {
        url: 'signup',
        templateUrl: 'signup.html',
        controller: 'AuthCtrl',
      })
      .state('inventory', {
        url: '/inventory/index',
        templateUrl: 'vehicles.html',
        // controller: 'VehiclesController'
      })
      .state('inventory.delivered', {
        url: '/delivered',
        templateUrl: 'vehicles.html',
        // controller: 'VehiclesController'
      })
      .state('inventory.single', {
        url: '/:vin',
        templateUrl: 'vehicle.html',
        // controller: 'VehiclesController'
      })
      .state('users', {
        url: '/users/:name',
        templateUrl: 'user.html',
        controller: 'UserController as user',
        resolve: {
          user: function ($stateParams, UserService) {
            // return UserService.getUser($stateParams.name); have to fix the api call in UserService
            return {name: 'Billy'};
          }
        }
      })
      .state('admin', {
        url: '/admin',
        templateUrl: 'admin.html',
        // controller: 'AdminController'
      })
      .state('admin.users', {
        url: '/users',
        templateUrl: 'users.html',
        // controller: 'UsersController'
      })
      .state('admin.analytics', {
        url: '/analytics',
        templateUrl: 'stats.html',
        // controller: 'StatsController'
      })
      .state('admin.import', {
        url: '/inventory/import',
        templateUrl: 'import.html',
        // controller: 'ImportController'
      })
      .state('admin.swaps', {
        url: '/swaplists',
        templateUrl: 'swaps.html',
        // controller: 'SwapController'
      });
  });