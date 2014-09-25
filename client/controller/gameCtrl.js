'use strict';
dezboapp.controller('gameCtrl', ['$scope', '$http', '$window', '$timeout',
  function ($scope, $http, $window, $timeout) {
    $scope.celebItems = [];
    $http.get('/celebItems').
      success(function (data) {
        $scope.celebItems = data;
        $scope.counter = 0;
        $scope.celebItem = $scope.celebItems[$scope.counter];
        $scope.showProgress = false;
      })
      .error(function (data) {
        console.log(data);
        $scope.$apply(function () {
          $location.path("/comingsoon");
        });
      });


    $scope.changeItem = function (voteValue) {
      $scope.inProgress = true;
      if ($scope.counter == 1) {
        $scope.counter = 0;
      } else {
        $scope.counter = 1;
      }
      // send google analytics the current item's vote
      if ($window.ga) {
        ga('send', 'event', 'voteitem', $scope.celebItem.id, $scope.celebItem.itemTitle, voteValue);
      }
      $scope.showProgress = true;
      $scope.votePercentage = Math.floor((Math.random() * 100) + 0);
      var nextImage = function () {
        $scope.celebItem = $scope.celebItems[$scope.counter];
        $scope.showProgress = false;
        $scope.inProgress = false;
        $scope.votePercentage = 0;
      };

      $timeout(nextImage, 1500);
      $http({method: 'Post', url: '/voteitem', data: {greeting: 'hi'}}).
        success(function(data, status, headers, config) {
          alert(data);
        });
    };
  }
]);
