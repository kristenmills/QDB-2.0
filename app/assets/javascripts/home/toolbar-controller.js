angular.module('QDB').controller('ToolbarController', ['$scope', '$location',
  function($scope, $location){
    var tabs = ['/', 'quotes', 'tags'];
    $scope.selected = 0

    $scope.$watch('selected', function(newValue, oldValue) {
      $location.path(tabs[newValue]);
    });

    $scope.goTo = function(url) {
      $location.path(url);
      document.getElementById('drawerPanel').togglePanel();
    }
  }
]);
