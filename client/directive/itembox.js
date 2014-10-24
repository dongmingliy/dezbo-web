'use strict';

dezboapp.directive('itembox', function() {
  return {
    restrict: 'E',
    templateUrl: '/directive/itembox',
    scope: {
      i: "="
    }
  };
});
