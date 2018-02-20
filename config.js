(function() {

  angular
    .module("app")
    .config(function($routeProvider) {
      $routeProvider
        .when("/fact", {
          template: "<facts-component></facts-component>"
        })
        .when("/factor", {
          template: "<factors-component></factors-component>"
        });
    });
})();
