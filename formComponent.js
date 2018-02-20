(function() {
  var formComponent = {
    template: `
    <h1>Enter a Number:</h1>
    <form ng-submit="$ctrl.setNumberTwice();">
      <input type="number" ng-model="$ctrl.number">
      <button type="submit">Enter the number</button>
    </form>
    `,
    controller: function(FactorService, FactService) {
      var $ctrl = this;
      $ctrl.number;
      $ctrl.setNumberTwice = function() {
        console.log($ctrl.number);
        FactorService.setNumber($ctrl.number);
      }
    }
  }


  angular
    .module("app")
    .component("formComponent", formComponent);
})();
