(function() {
  function factsService($http){
    return {
      getApi: getApi
    };

    function getApi(number){
      console.log(number);
      var num = number;
      return $http({
        method: "GET",
        url: "https://numbersapi.p.mashape.com/" + num + "/trivia?fragment=true&json=true&notfound=floor",
        headers: {
        "X-Mashape-Key": 'd3g8GAFEaDmsh1N8s8WTrwCmn6Dpp1mZEshjsn941cD5ZSO6nO',
      	"Accept": "application/json"
        }
}).then(function(response){
        console.log(response.data);
        return response.data;
      })
    };

  }

  angular.module("app")
    .factory("factsService",factsService)
}());
