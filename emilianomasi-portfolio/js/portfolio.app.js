//Analytics
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-34599580-3', 'emilianomasi.com');
ga('send', 'pageview');


//create the module and name it emPortfolioApp
// also include ngRoute for all our routing needs
var emPortfolioApp = angular.module('emPortfolioApp', ['ngRoute', 'ngAnimate']);

// configure our routes
emPortfolioApp.config(function($routeProvider) {
  $routeProvider

  // route for the home page
  .when('/', {
    templateUrl : 'pages/home',
    controller  : 'mainController'
  })

  .when('/projects/showon', {
    templateUrl : 'pages/projects/showon',
    controller  : 'mainController'
  })
  
  .when('/projects/ddb', {
    templateUrl : 'pages/projects/ddb',
    controller  : 'mainController'
  })
  
  .when('/projects/emdotcom', {
    templateUrl : 'pages/projects/emdotcom',
    controller  : 'mainController'
  })
  
  .when('/mobile-apps', {
    templateUrl : 'pages/mobile-apps',
    controller  : 'mainController'
  })
  
  .when('/covers', {
    templateUrl : 'pages/covers',
    controller  : 'mainController'
  })
  
  .when('/free-hand-draws', {
    templateUrl : 'pages/free-hand-draws',
    controller  : 'mainController'
  })

});

// create the controller and inject Angular's $scope
emPortfolioApp.controller('mainController', ["$scope", "animationService", function($scope, animationService) {
  animationService.scrollTo(0, 500);
}]);

emPortfolioApp.service("animationService", [function() {
  var win = $(window), globalContainers = $("html, body");
  
  var animationServiceObject = {
      scrollTo: function(value, time){
        globalContainers.animate({scrollTop: value}, time?time:1000);
      }
  };
  return animationServiceObject;
}]);
