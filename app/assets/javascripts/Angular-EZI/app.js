angular
  .module('app', ['ui.router', 'ngResource'])
  .config(function($stateProvider){
    $stateProvider
      .state('welcome', {
        url: '/welcome',
        templateUrl: '#',
        controller: 'LoginController'
      })
      .state('signup', {
        url: '/signup',
        templateUrl: '#',
        controller: 'RegistrationController'
      })
      .state('vehicles', {
        url: '/vehicles',
        templateUrl: '#',
        controller: 'VehiclesController'
      })
      .state('vehicles.single', {
        url: '/vehicles/:vin',
        templateUrl: '#',
        controller: 'VehiclesController'
      })
      .state('vehicles.delivered', {
        url: '/vehicles/delivered',
        templateUrl: '#',
        controller: 'VehiclesController'
      })
      .state('user', {
        url: '/users/:name',
        templateUrl: '#',
        controller: 'VehiclesController'
      })
      .state('admin', {
        url: '/admin',
        templateUrl: '#',
        controller: 'AdminController'
      })
      .state('admin.users', {
        url: '/users',
        templateUrl: '#',
        controller: 'UsersController'
      })
      .state('admin.dealership', {
        url: '/analytics',
        templateUrl: '#',
        controller: 'StatsController'
      })
      .state('admin.import', {
        url: '/vehicleimport',
        templateUrl: '#',
        controller: 'ImportController'
      })
      .state('admin.swap', {
        url: '/swaplist',
        templateUrl: '#',
        controller: 'SwapController'
      });
  });