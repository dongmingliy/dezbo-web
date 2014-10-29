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

    $scope.biddingitems = [{
      imageURL: 'img/shop/ellen2_small.png',
      celebName: "Ellen's",
      itemName: "signed Oscars Selfie",
      currentBid: "$350",
      charityName: "The Gentle Barn",
      startTime: "1401000000101"
    },
    {
      imageURL: "img/shop/snoop5_small.png",
      celebName: "Snoop’s",
      itemName: "Sunglasses",
      currentBid: "$250",
      charityName: "Youth Football League Foundation",
      startTime: "1401000000101"
    },
    {
      imageURL: "img/shop/gaga2_small.png",
      celebName: "Lady Gaga’s",
      itemName: "Gloves",
      currentBid: "$784",
      charityName: "Born This Way Foundation",
      startTime: "1401000000101"
    },
    {
      imageURL: "img/shop/kristine1_small.png",
      celebName: "Kristen Bell’s",
      itemName: "Camera",
      currentBid: "$1500",
      charityName: "PETA",
      startTime: "1401000000101"
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
