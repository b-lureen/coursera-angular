(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyShoppingController', ToBuyShoppingController)
.controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyShoppingController.$inject = ['$scope', 'ShoppingListCheckOffService'];
function ToBuyShoppingController($scope, ShoppingListCheckOffService) {
  var toBuy = this;
  toBuy.TBItems = ShoppingListCheckOffService.getTBItems();
  toBuy.buyItem = function (index) {
    ShoppingListCheckOffService.buyItem(index);
  };
}

AlreadyBoughtShoppingController.$inject = ['$scope', 'ShoppingListCheckOffService'];
function AlreadyBoughtShoppingController($scope, ShoppingListCheckOffService) {
  var bought = this;
  bought.ABItems = ShoppingListCheckOffService.getABItems();
}

function ShoppingListCheckOffService() {
  var service = this;

  var TBItems = [
    {name: "Jerky Sticks", qty: 3},
    {name: "Bottles of ranch dressing", qty: 14},
    {name: "Free Samples", qty: 12},
    {name: "Cases of Budweiser", qty: 2},
    {name: "Bags of marshmallows", qty: 7}
  ];
  var ABItems = [];

  service.buyItem = function (index) {
    ABItems.push(TBItems.splice(index, 1)[0]);
  };

  service.getTBItems = function () {
    return TBItems;
  };

  service.getABItems = function () {
    return ABItems;
  };
}
})();
