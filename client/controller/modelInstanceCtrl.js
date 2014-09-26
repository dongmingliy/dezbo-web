'use strict';
dezboapp.controller('ModalInstanceCtrl', ['$scope', '$modalInstance',
  function ($scope, $modalInstance) {
    $scope.ok = function () {
      $modalInstance.close();
    };

    $scope.cancel = function () {
      $modalInstance.close();
    };
  }]);