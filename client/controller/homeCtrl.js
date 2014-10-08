'use strict';

var dezboapp = angular.module('dezboapp', ['timer', 'ui.bootstrap']);

angular.module('dezboapp').controller('homeCtrl', ['$scope', '$modal',
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