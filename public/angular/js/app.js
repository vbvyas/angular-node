angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives']).
  config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider.
      when('/blog', {
        templateUrl: 'blog/index',
        controller: IndexCtrl
      }).
      when('/blog/new', {
        templateUrl: 'blog/new',
        controller: NewCtrl
      }).
      when('/blog/show/:id', {
        templateUrl: 'blog/show',
        controller: ShowCtrl
      }).
      when('/blog/edit/:id', {
        templateUrl: 'blog/edit',
        controller: EditCtrl
      }).
      when('/blog/delete/:id', {
        templateUrl: 'blog/delete',
        controller: DeleteCtrl
      }).
      otherwise({
        redirectTo: '/blog'
      });
    $locationProvider.html5Mode(true);
  }];
