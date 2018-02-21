(function() {
  var factorsComponent = {
    template: `
    <p> <span ng-repeat="factor in $ctrl.factors track by $index">{{ factor }}  </span></p>
    `,
    controller: function(FactorService) {
      vm = this;
      vm.factors = FactorService.getFactors();
      console.log(vm.factors);
      }
    }


  angular
    .module("app")
    .component("factorsComponent", factorsComponent);
})();
