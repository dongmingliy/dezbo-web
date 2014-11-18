'use strict';

dezboapp.directive('biddingbox', function() {
  return {
    restrict: 'E',
    templateUrl: '/directive/biddingbox',
    scope: {
      i: "="
    }
  };
});
