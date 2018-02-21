(function() {
  var factorsComponent = {
    template: `
    <h3>Here are the prime factors for your number:</h3> 
    <p ng-repeat="factor in $ctrl.factors track by $index">{{ factor }}</p>
    `,
    controller: function(FactorService) {
      vm = this;
      vm.factors = FactorService.getFactors();
      }
    }


  angular
    .module("app")
    .component("factorsComponent", factorsComponent);
})();
