'use strict';

dezboapp.directive('donorbox', function() {
  return {
    restrict: 'E',
    templateUrl: '/directive/donorbox',
    replace: true,
    scope: {
      i: "="
    }
  };
});
