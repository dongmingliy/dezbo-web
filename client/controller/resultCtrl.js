'use strict';

dezboapp.controller('resultCtrl', ['$scope', '$http', '$window', '$timeout', '$modal',
  function ($scope, $http, $window, $timeout, $modal) {
    retreiveVoteResult($http, $scope);
    $scope.test = 54;

  }
]);

function retreiveVoteResult($http, $scope) {
  $http.get('/voteresult').
    success(function (data) {
      $scope.voteResults = data;
      console.log($scope.voteResults);
    })
    .error(function (data) {
      console.log(data);
      $scope.$apply(function () {
        $location.path("/comingsoon");
      });
    });
}
