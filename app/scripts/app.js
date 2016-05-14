'use strict';

/**
 * @ngdoc overview
 * @name angularValidationTutorialStartApp
 * @description
 * # angularValidationTutorialStartApp
 *
 * Main module of the application.
 */
angular
  .module('angularValidationTutorialStartApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngMessages'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
