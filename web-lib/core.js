var app = angular.module('app',[])
app.controller('MainCtrl',[
  "$scope",
  function($scope){
    // $scope.view = "home"
    $scope.view = "inside"
    $scope.setView = function(v){ $scope.view = v}
  }
])
