'use strict';
dezboapp.controller('gameCtrl', ['$scope','$http','$window',
  function($scope, $http,$window) {
    $scope.celebItems =[
      {"id": 0, "itemTitle":"Red Couch on the Ellen Show", "itemURL":"img/shop/ellen1.png","celebName":"Ellen Degeneres", "celebURL": "img/game/ellen_head.png"},
      {"id": 1, "itemTitle":"NFL's Game Ball", "itemURL":"img/coming_soon/NFL.png","celebName":"Pharrell Williams", "celebURL": "img/logo_o.png"}
    ];
//    $http.get('celebItems.json').
//      success(function(data){
//      $scope.celebItems = data;
//    })
//      .error(function(data){
//        console.log(data);
//    });
    $scope.itemTitle = 'Red Couch on the Ellen Show';
    $scope.itemURL ='img/game/ellen_head.png';
    $scope.counter = 0;
    $scope.celebItem = $scope.celebItems[$scope.counter];
    $scope.changeItem = function(voteValue) {
      if($scope.counter == 1){
        $scope.counter = 0;
      } else {
        $scope.counter = 1;
      }
      // send google analytics the current item's vote
      if($window.ga){
        ga('send', 'event', 'voteitem', $scope.celebItem.id, $scope.celebItem.itemTitle , voteValue);
      }
      $scope.celebItem = $scope.celebItems[$scope.counter];
    };
  }
]);
