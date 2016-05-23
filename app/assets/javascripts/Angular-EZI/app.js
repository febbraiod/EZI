angular
  .module('app', ['ui.router', 'ngResource', 'templates'])
  .config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise("/");
    $stateProvider
      .state('welcome', {
        url: '/welcome',
        templateUrl: 'welcome.html',
        // controller: 'WelcomeController'
      })
      .state('welcome.signin', {
        url: '/signin',
        templateUrl: 'signin.html',
        // controller: 'LoginController'
      })
      .state('welcome.signup', {
        url: '/signup',
        templateUrl: 'signup.html',
        // controller: 'RegistrationController'
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
        // controller: 'UserController'
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