'use strict';
var randnums = [0,1,2,3,4,5,6];
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex ;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
shuffle(randnums);
dezboapp.controller('gameCtrl', ['$scope', '$http', '$window', '$timeout',
  function ($scope, $http, $window, $timeout) {
    var counter = 0;
    $scope.celebItems = [];
    $http.get('/celebItems').
      success(function (data) {
        $scope.celebItems = data;
        $scope.counter = 0;
        $scope.celebItem = $scope.celebItems[randnums[counter]];
        $scope.showProgress = false;
      })
      .error(function (data) {
        console.log(data);
        $scope.$apply(function () {
          $location.path("/comingsoon");
        });
      });

    $scope.changeItem = function (voteValue) {
      counter++;
      $scope.inProgress = true;
      if ($scope.celebItems[randnums[counter]]) {
        // send google analytics the current item's vote
        if ($window.ga) {
          ga('send', 'event', 'voteitem', $scope.celebItem.id, $scope.celebItem.itemTitle, voteValue);
        }
        $scope.showProgress = true;
        $scope.votePercentage = Math.floor((Math.random() * 100) + 0);
        var nextImage = function () {
          $scope.celebItem = $scope.celebItems[randnums[counter]];
          $scope.showProgress = false;
          $scope.inProgress = false;
          $scope.votePercentage = 0;
        };

        $timeout(nextImage, 1500);
//        $http({method: 'Post', url: '/voteitem', data: {greeting: 'hi'}}).
//          success(function (data, status, headers, config) {
//            alert(data);
//          });
      }
    };
  }
]);
