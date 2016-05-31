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
        controller: 'AuthController as ctrl',
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
        controller: 'AuthController',
      })
      .state('inventory', {
        url: '/inventory',
        templateUrl: 'inventory.html',
        controller: 'InventoryController as ctrl'
      })
      .state('inventory.delivered', {
        url: '/delivered',
        templateUrl: 'delivered_vehicles.html',
        // controller: 'deliveredController'
      })
      .state('vehicle', {
        url: '/vehicle/:id',
        templateUrl: 'vehicle.html',
        controller: 'VehicleController as ctrl',
        resolve: {
          vehicle_data: function ($stateParams, vehicleService) {
            return vehicleService.getVehicle($stateParams.id);
          }
        }
      })
      .state('users', {
        url: '/users/:name',
        templateUrl: 'user.html',
        controller: 'UserController as ctrl',
      })
      .state('admin', {
        url: '/admin',
        templateUrl: 'admin.html',
        controller: 'StatusController as ctrl'
      })
      .state('admin.users', {
        url: '/users',
        templateUrl: 'users.html',
        controller: 'UserController as ctrl'
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