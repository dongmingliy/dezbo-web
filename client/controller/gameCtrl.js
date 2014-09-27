'use strict';
var randomItems = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

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
shuffle(randomItems);

function showModalDialog($scope, showModal, $modal) {
  if ($scope.counter === showModal) {
    var modalInstance = $modal.open({
      templateUrl: '/game/signup',
      controller: 'ModalInstanceCtrl',
      size: 'modal-sm',
      backdrop: 'static'
    });
    modalInstance.result.then(function () {
      $scope.maxItems = randomItems.length;
      $scope.inProgress = false;
    });
  }
}

dezboapp.controller('gameCtrl', ['$scope', '$http', '$window', '$timeout', '$modal',
  function ($scope, $http, $window, $timeout, $modal) {
    $scope.counter = 1;
    var showModal = 5;
    $scope.maxItems = showModal;
    $scope.celebItems = [];
    $http.get('/celebItems').
      success(function (data) {
        $scope.celebItems = data;
        $scope.counter = 0;
        $scope.celebItem = $scope.celebItems[randomItems[$scope.counter]];
        $scope.showProgress = false;
      })
      .error(function (data) {
        console.log(data);
        $scope.$apply(function () {
          // $location.path("/comingsoon");
        });
      });

    $scope.changeItem = function (voteValue) {
      $scope.inProgress = true;
      var currentItem = $scope.celebItems[randomItems[$scope.counter]];
      var transform = function (data) {
        return $.param(data);
      };
      $http.post('/voteitem', $scope.celebItems[randomItems[$scope.counter]],
        {headers: {'Content-Type': 'application/x-www-form-urlencoded'}, transformRequest: transform})
        .success(function (response) {
          alert(response);
        })
        .error(function (error){
          console.log(error);
        });
      currentItem.vote = voteValue;
      $scope.counter++;
      showModalDialog($scope, showModal, $modal);

      if ($scope.celebItems[randomItems[$scope.counter]]) {
        // send google analytics the current item's vote
        if ($window.ga) {
          ga('send', 'event', 'voteitem', $scope.celebItem.id, $scope.celebItem.itemTitle, voteValue);
        }
        $scope.showProgress = true;
        var nextImage = function () {
          $scope.celebItem = $scope.celebItems[randomItems[$scope.counter]];
          $scope.showProgress = false;
          $scope.inProgress = false;
          $scope.votePercentage = 0;

        };
        $timeout(nextImage, 200);


      }
      // no item on the current index
      else {
        $scope.inProgress = false;
        // $window.location.href = '/comingsoon';
      }
    };

  }
]);
