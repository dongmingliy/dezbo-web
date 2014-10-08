'use strict';

angular.module('dezboapp').controller('ModalInstanceCtrl', ['$scope', '$modalInstance','$http',
  function ($scope, $modalInstance,$http) {
    $scope.ok = function () {
      $modalInstance.close();
    };

    $scope.cancel = function () {
      $modalInstance.close();
    };
    var transform = function (data) {
      return $.param(data);
    };
    $scope.signupPending = true;
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
  }]);