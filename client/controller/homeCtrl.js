'use strict';

dezboapp.controller('homeCtrl', ['$scope', '$modal',
  function ($scope, $modal) {
    $scope.timerRunning = true;

    $scope.startTimer = function () {
      $scope.$broadcast('timer-start');
      $scope.timerRunning = true;
    };

    $scope.stopTimer = function () {
      $scope.$broadcast('timer-stop');
      $scope.timerRunning = false;
    };

    $scope.$on('timer-stopped', function (event, data) {
      console.log('Timer Stopped - data = ', data);
    })

    $scope.raffleitems = [{
      imageURL: 'img/shop/ellen1_small.png',
      celebName: "Ellen's",
      itemName: "Red Couch on the Ellen Show",
      charityName: "The Gentle Barn",
      ending: "Nov 25, 2014"
    },
      {
        imageURL: "img/shop/pharrell1_small.png",
        celebName: "Pharrell's",
        itemName: "Tall Hat",
        charityName: "From One Hand To Another",
        ending: "Dec 11, 2014"
      },
      {
        imageURL: "img/shop/gaga1_small.png",
        celebName: "Lady Gaga’s ",
        itemName: "Red Carpet Heels",
        charityName: "Born This Way Foundation",
        ending: "Dec 15, 2014"
      },
      {
        imageURL: "img/shop/snoop1_small.png",
        celebName: "Snoop’s ",
        itemName: "Stage Mic",
        charityName: "Youth Football League Foundation",
        ending: "Nov 25, 2014"
      }];
//    $scope.showYoutubeModal = function ($scope,$http, $modal) {
//      $modal.open({
//        templateUrl: '/home/youtube',
//        controller: 'ModalInstanceCtrl',
//        size: 'modal-sm',
//        backdrop: 'static'
//      });
//    }
  }
]);
