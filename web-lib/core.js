var app = angular.module('app',[])
app.controller('MainCtrl',[
  "$scope",
  "$location",
  function($scope,$loc){
    $scope.address = $loc.$$path.split('/')
    $scope.address.shift() // first is always blank
    $scope.view = $scope.address[0] || 'home'
    $scope.setView = function(v){ $scope.view = v}


    $scope.zoomed = null
    $scope.zoomIn = function(name){ $scope.zoomed = name }
  }
])
