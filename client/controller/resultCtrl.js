'use strict';

angular.module('dezboapp').controller('resultCtrl', ['$scope', '$http', '$window', '$timeout', '$modal',
  function ($scope, $http, $window, $timeout, $modal) {
    $scope.voteResults = [];

    retreiveVoteResult($http, $scope);

    $scope.signup = function (emailAddress) {
      $http.post('/comingsoon', {email: emailAddress},
        {headers: {'Content-Type': 'application/x-www-form-urlencoded'}, transformRequest: transform})
        .success(function (response) {
          $scope.signupPending = false;
        })
        .error(function (error){
          console.log(error);
        });
    }
  }
]);

function retreiveVoteResult($http, $scope) {
  $http.get('/voteresult').
    success(function (data) {
      $scope.voteResults = data;
      $scope.topvotecount = $scope.voteResults[0].voteup;
    })
    .error(function (data) {
      console.log(data);
      $scope.$apply(function () {
        $location.path("/comingsoon");
      });
    });
}
