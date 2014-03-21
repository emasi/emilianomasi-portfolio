//Analytics
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-34599580-3', 'emilianomasi.com');
ga('send', 'pageview');

jQuery.fn.animateAuto = function(prop, speed, callback){
  var elem, height, width;
  return this.each(function(i, el){
      el = jQuery(el), elem = el.clone().css({"height":"auto","width":"auto"}).appendTo(el.parent());
      height = elem.css("height"),
      width = elem.css("width"),
      elem.remove();
      
      if(prop === "height")
          el.animate({"height":height}, speed, callback);
      else if(prop === "width")
          el.animate({"width":width}, speed, callback);  
      else if(prop === "both")
          el.animate({"width":width,"height":height}, speed, callback);
  });  
}

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
    controller  : 'pageController'
  })
  
  .when('/projects/ddb', {
    templateUrl : 'pages/projects/ddb',
    controller  : 'pageController'
  })
  
  .when('/projects/emdotcom', {
    templateUrl : 'pages/projects/emdotcom',
    controller  : 'pageController'
  })
  
  .when('/mobile-apps', {
    templateUrl : 'pages/mobile-apps',
    controller  : 'pageController'
  })
  
  .when('/covers', {
    templateUrl : 'pages/covers',
    controller  : 'pageController'
  })
  
  .when('/free-hand-draws', {
    templateUrl : 'pages/free-hand-draws',
    controller  : 'pageController'
  })

});

// create the controller and inject Angular's $scope
emPortfolioApp.controller('mainController', ["$scope", "animationService", function($scope, animationService) {
  var paragraph = $('header p');
  animationService.heightToAuto(
      paragraph,
      100,
      function(){
        animationService.scrollTo(0, 400);
      }
  );
}]);

emPortfolioApp.controller('pageController', ["$scope", "animationService", function($scope, animationService) {
  var paragraph = $('header p');
  animationService.heightTo(
      $('header p'),
      0,
      100,
      function(){
        animationService.scrollTo(0, 400);
      }
   );
}]);

emPortfolioApp.service("animationService", [function() {
  var win = $(window), globalContainers = $("html, body");
  
  var animationServiceObject = {
      scrollTo: function(value, time, callback){
        globalContainers.animate({scrollTop: value}, time?time:1000, null, callback);
      },
      fadeIn: function(element, callback){
        element.fadeIn(800, callback);
      },
      fadeOut: function(element, callback){
        element.fadeOut('fast', callback);
      },
      heightTo: function(element, value, time, callback){
        element.animate({height: value}, time?time:1000, null, callback);
      },
      heightToAuto: function(element, time, callback){
        element.animateAuto("height", time, callback);
      }
  };
  return animationServiceObject;
}]);
