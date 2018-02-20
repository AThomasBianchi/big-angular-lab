(function() {
  var factsComponent = {
    template: `
              <div>
              <p>{{ $ctrl.num }}</p>

              <p>{{ $ctrl.facts.text }}</p>

              </div>

    `,
    controller: function(factsService){
      var $ctrl = this
      $ctrl.num = 55;
      factsService.getApi($ctrl.num).then(function(facts) {
          $ctrl.facts = facts;

      });
    }
  }

    angular.module("app")
      .component("factsComponent", factsComponent)
}());
