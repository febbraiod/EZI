angular
  .module('app', ['ui.router', 'ngResource', 'templates', 'Devise'])
  .config(function($stateProvider, $urlRouterProvider, AuthProvider){
    $urlRouterProvider.otherwise("/");
    $stateProvider //at somepoint I need to add permissions: https://www.theodo.fr/blog/2015/08/handling-basic-route-authorization-in-angularjs/
      .state('welcome', {
        url: '/',
        templateUrl: 'welcome.html'
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
        controller: 'AuthController'
      })
      .state('inventory', {
        url: '/inventory',
        templateUrl: 'inventory.html',
        controller: 'InventoryController as ctrl'
        // resolve: { // Does resolve only fire on a hard reload or does it fire on state change?
        //   vehicles: function(inventoryService){
        //     console.log("RESOLVE FIRED")
        //     return inventoryService.getInventory();
        //   }
        // }
      })
      .state('inventory.delivered', {
        url: '/delivered',
        templateUrl: 'delivered_vehicles.html'
        // controller: 'deliveredController'
      })
      .state('vehicle', {
        url: '/vehicle/:id',
        templateUrl: 'vehicle.html',
        controller: 'VehicleController as ctrl'
      })
      .state('users', {
        url: '/users/:name',
        templateUrl: 'user.html',
        controller: 'UserController as ctrl'
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
        templateUrl: 'stats.html'
        // controller: 'StatsController'
      })
      .state('admin.import', {
        url: '/inventory/import',
        templateUrl: 'import.html',
        controller: 'ImportController as ctrl'
      })
      .state('admin.swaps', {
        url: '/swaplists',
        templateUrl: 'swaps.html'
        // controller: 'SwapController'
      });
  });