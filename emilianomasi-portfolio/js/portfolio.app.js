//Analytics
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-34599580-3', 'emilianomasi.com');
ga('send', 'pageview');


//create the module and name it emPortfolioApp
// also include ngRoute for all our routing needs
var emPortfolioApp = angular.module('emPortfolioApp', ['ngRoute']);

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
    controller  : 'showonController'
  })
  
  .when('/projects/ddb', {
    templateUrl : 'pages/projects/ddb',
    controller  : 'ddbController'
  })
  
  .when('/projects/emdotcom', {
    templateUrl : 'pages/projects/emdotcom',
    controller  : 'emdotcomController'
  })
  
  .when('/projects/mobile-apps', {
    templateUrl : 'pages/mobile-apps',
    controller  : 'mobileappsController'
  })
  
  .when('/projects/covers', {
    templateUrl : 'pages/covers',
    controller  : 'coversController'
  })
  
  .when('/projects/free-hand-draws', {
    templateUrl : 'pages/free-hand-draws',
    controller  : 'freehanddrawsController'
  })

});

// create the controller and inject Angular's $scope
emPortfolioApp.controller('mainController', function($scope) {

});

emPortfolioApp.controller('showonController', ["$scope", "ytService", function(scope, ytService) {
  console.log("here we are")
}]);

emPortfolioApp.controller('ddbController', function($scope) {

});

emPortfolioApp.controller('emdotcomController', function($scope) {

});

emPortfolioApp.controller('mobileappsController', function($scope) {

});

emPortfolioApp.controller('coversController', function($scope) {

});

emPortfolioApp.controller('freehanddrawsController', function($scope) {

});

emPortfolioApp.service("ytService", ["$window", function(window) {
  var tag = document.createElement('script');

  tag.src = "https://www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  
  var player;
  var isFirstPlay = false;
  window.onYouTubeIframeAPIReady = function() {
    player = new YT.Player($('iframe.header-multimedia').attr('id'), {
      events: {
        'onStateChange': onPlayerStateChange
      }
    });
    console.log(player)
  }
  
  onPlayerStateChange = function(event){
    console.log("state changed")
    if(event.data == YT.PlayerState.PLAYING && !isFirstPlay){
      isFirstPlay = true;
      console.log(player)
    }
  }
}]);