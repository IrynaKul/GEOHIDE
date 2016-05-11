
var GeoHideApp = angular.module('GeoHide', ['ngRoute','ngResource','ngCookies','firebase']);

GeoHideApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/home', {
        templateUrl: 'partials/homepage.html'
      }).
      // when('/search', {
      //   templateUrl: 'partials/browse_villain.html',
      //   controller: 'SearchCtrl'
      // }).
      // when('/info/:characterId', {
      //   templateUrl: 'partials/villain_info.html',
      //   controller: 'infoCtrl'
      // }).
      // when('/fight', {
      //   templateUrl: 'partials/vs.html',
      //   controller: 'GameCtrl'
      // }).
      otherwise({
        redirectTo: '/home'
      });
  }]);
