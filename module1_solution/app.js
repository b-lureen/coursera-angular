(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LCController);

LCController.inject = ["$scope"];
function LCController($scope) {
  $scope.items = "";
  $scope.msg = "";

  $scope.check = function () {
    let itemArr = $scope.items.trim().split(",");
    if (itemArr.length > 3) $scope.msg = "Too much!";
    else if (itemArr == "") $scope.msg = "";
    else $scope.msg = "Enjoy!";
  };
}
})();
