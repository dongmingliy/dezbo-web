'use strict';

angular.module('dezboapp', ['timer']);

function shopController($scope) {
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
  });
}
shopController.$inject = ['$scope'];