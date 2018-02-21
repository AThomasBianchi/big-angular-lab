(function() {
  var formComponent = {
    template: `
    <h2>Enter a Number:</h2>
    <form ng-submit="$ctrl.setNumberTwice();">
      <input type="number" ng-model="$ctrl.number">
      <button type="submit">SUBMIT NUMBER</button>
    </form>
    <div class="showDiv" ng-show="$ctrl.truthy">
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
        if($ctrl.number){
          FactorService.setNumber($ctrl.number);
          factsService.setNumber($ctrl.number);
          $ctrl.truthy = true;
        }
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
