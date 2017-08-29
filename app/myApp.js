var app = angular.module("myApp", ['ngRoute']);

app.config(["$routeProvider", "$locationProvider",
   function($routeProvider, $locationProvider) {
       
       $routeProvider
       .when('/',{
       		templateUrl : 'app/views/vue1.html',
       		controller : "myCtrl"
       })

       .when('/page2',{
	       	templateUrl : 'app/views/vue2.html',
	       	controller : "myCtrl2"
	       })
       .otherwise({
       		redirectTo: '/'
       	
       });
       
       // Système de routage
       // $routeProvider
       // .when(‘/home’, {
       //     templateUrl: ‘partials/home.html’,
       //     controller: ‘homeCtrl’
       // })
       // .when(‘/contact’, {
       //     templateUrl: ‘partials/contact.html’,
       //     controller: ‘contactCtrl’
       // });
   }
]);