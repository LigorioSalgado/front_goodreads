
(function () {
	'use strict'

	angular 
		.module('readsApp',[])
		.controller('readsCtrl',readsCtrl);


		function readsCtrl($http){
			var ctx = this;
      
      $http.get('http://localhost:8000/api/v1/books/').then(function(resp){
        console.log(resp);
        ctx.books = resp.data
      }).catch(function(err){
        console.log(err)
      })
      




		}


})();