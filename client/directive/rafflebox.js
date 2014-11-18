'use strict';

dezboapp.directive('rafflebox', function() {
  return {
    restrict: 'E',
    templateUrl: '/directive/rafflebox',
    scope: {
      i: "="
    }
  };
});
