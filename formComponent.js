(function() {
  var formComponent = {
    template: `
    <h1>Enter a Number:</h1>
    <form ng-submit="$ctrl.setNumberTwice();">
      <input type="number" ng-model="$ctrl.number">
      <button type="submit">Enter the number</button>
    </form>
    <div ng-show="$ctrl.truthy">
      <h2> Your number is: </h2>
      <p> {{ $ctrl.number }} </p>
      <nav>
        <a href="#!/fact">Fact</a>
        <a href="#!/factor">Factors</a>
        <a href="#" ng-click="$ctrl.reset()">Reset</a>
      </nav>

    </div>
    `,
    controller: function(FactorService, factsService) {
      var $ctrl = this;
      $ctrl.truthy = false;
      $ctrl.number;
      $ctrl.setNumberTwice = function() {
        FactorService.setNumber($ctrl.number);
        factsService.setNumber($ctrl.number);
        $ctrl.truthy = true;
      }
      $ctrl.reset = function() {
        $ctrl.truthy = false;
        $ctrl.number = "";
      }
    }
  }


  angular
    .module("app")
    .component("formComponent", formComponent);
})();
