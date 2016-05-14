'use strict';

/**
 * @ngdoc function
 * @name angularValidationTutorialStartApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularValidationTutorialStartApp
 */
angular.module('angularValidationTutorialStartApp')
  .controller('MainCtrl',['$scope', function ($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.locationsForm = {};

    $scope.processForm = function () {
      $scope.locationsForm = locationsForm;
      console.log($scope.locationsForm.city.value);
    }
  }]);
