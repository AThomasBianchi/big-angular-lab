(function() {
  var factorsComponent = {
    template: `
    <div class="result"><p> <span ng-repeat="factor in $ctrl.factors track by $index">{{ factor }}  </span></p></div>
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
