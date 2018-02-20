(function() {
  var factsComponent = {
    template: `
              <div>
              

              <p>{{ $ctrl.facts.text }}</p>

              </div>

    `,
    controller: function(factsService){
      var $ctrl = this
      // $ctrl.num = factsService.num;
      factsService.getApi().then(function(facts) {
          $ctrl.facts = facts;

      });
    }
  }

    angular.module("app")
      .component("factsComponent", factsComponent)
}());
