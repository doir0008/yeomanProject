'use strict';

/**
 * @ngdoc overview
 * @name yeomanProjectApp
 * @description
 * # yeomanProjectApp
 *
 * Main module of the application.
 */
angular
  .module('yeomanProjectApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/ryan', {
        templateUrl: 'views/ryan.html',
        controller: 'RyanCtrl',
        controllerAs: 'ryan'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
