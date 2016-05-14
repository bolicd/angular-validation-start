'use strict';

angular.module('angularValidationTutorialStartApp')
.directive('coordinatesValidations', function () {

  return {
    restrict:'A',
    require:'ngModel',
    scope: {
      coordtype:'@'
    },
    link: function(scope,elem,attrs,mCtrl){

      //convert radians to degrees
      function convertToDegrees(value) {
        return value * (180 / Math.PI);
      }

      function checkRange(x, min, max) {
        var retVal = x >= min && x <= max;
        return retVal;
      }

      function myValidation(value) {
        //validating coordinates based on type
        if (!isNaN(value)) {
          // this is valid number
          var degValue = convertToDegrees(value);

          if (scope.coordtype === 'latitude') {
            console.log(checkRange(degValue, -90, 90));
            mCtrl.$setValidity('validNum', checkRange(degValue, -90, 90));
          }

          if (scope.coordtype === 'longitude') {
            mCtrl.$setValidity('validNum', checkRange(degValue, -180, 180));
          }
        } else {
          // number is not valid
          mCtrl.$setValidity('validNum', false);
        }

        // this value is written by parser in calling component
        return value;
      }

      //this will invoke function for validation
      mCtrl.$parsers.push(myValidation);
    }

  }

});
