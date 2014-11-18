//'use strict';
//dezboapp.controller('comingsoonCtrl', ['$scope','$http','$timeout',
//  function($scope, $http,$timeout) {
//    $scope.timerRunning = true;
//
//    $scope.startTimer = function () {
//      $scope.$broadcast('timer-start');
//      $scope.timerRunning = true;
//    };
//
//    $scope.stopTimer = function () {
//      $scope.$broadcast('timer-stop');
//      $scope.timerRunning = false;
//    };
//
//    $scope.$on('timer-stopped', function (event, data) {
//      console.log('Timer Stopped - data = ', data);
//    });
//    $scope.d5_count = 0;
//    $scope.el_count = 0;
//    $scope.nfl_count = 0;
//    $scope.db_count = 0;
//    $timeout(function(){
//      $http.get('http://graph.facebook.com/?ids=http://dezbo.com/d5,http://dezbo.com/el,http://dezbo.com/nfl,http://dezbo.com/db').
//        success(function(data) {
//          $scope.d5_count +=  parseInt(data['http://dezbo.com/d5'].shares) || 0;
//          $scope.el_count +=  (parseInt(data['http://dezbo.com/el'].shares) || 0);
//          $scope.nfl_count +=  parseInt(data['http://dezbo.com/nfl'].shares) || 0;
//          $scope.db_count +=  parseInt(data['http://dezbo.com/db'].shares) || 0;
//        }).
//        error(function (data, status, headers, config) {
//          console.log(headers);
//        });
//      $scope.d5_count += parseInt(angular.element('#d5 .at_flat_counter').text()) || 0;
//      $scope.el_count += parseInt(angular.element('#el .at_flat_counter').text()) || 0;
//      $scope.nfl_count += parseInt(angular.element('#nfl .at_flat_counter').text()) || 0;
//      $scope.db_count += parseInt(angular.element('#db .at_flat_counter').text()) || 0;
//    },2000);
//
////    $scope.$on('$viewContentLoaded', function (event, data) {
////      $scope.d5_count = angular.element('#d5 .at_flat_counter').contents();
////    });
////    $scope.d5_count = parseInt(angular.element('#d5 .at_flat_counter').text());
////    $scope.$watch(function () {
////      return parseInt(angular.element('#d5 .at_flat_counter').text());
////    }, function(val) {
////      console.log($scope.d5_count);
////      console.log(val);
////    });
////    $http.get('http://graph.facebook.com/?ids=http%3a%2f%2fdezbo.com').
////      success(function(data) {
////        $scope.d5data = data['http://dezbo.com'];
////        // somehow facebook call the number of likes "shares"
////        $scope.d5count = data['http://dezbo.com'].shares;
////      }).
////      error(function (data, status, headers, config) {
////        $scope.d5data = data;
////      });
//
////    var url = 'http://cdn.api.twitter.com/1/urls/count.json?url=http://news.ycombinator.com?callback=JSON_CALLBACK';
////    $http.jsonp(url).
////      success(function(data) {
////        $scope.d5data = data;
////      }).
////      error(function (data, status, headers, config) {
////        $scope.d5data = data;
////      });
//  }
//]);
