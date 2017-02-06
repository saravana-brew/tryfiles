var app=angular.module('myapp',["ngRoute"]);
app.config(function($routeProvider){
  $routeProvider
  .when("/",{
    templateUrl : 'page1.html'
  })
  .when("/dashboard",{
  resolve: {
    "check": function ($rootScope,$location){
      if(!$rootScope.loggedIn){
        $location.path('/')
      }
    }
  },
  templateUrl : 'dashboard.html'
});
  .otherwise({
    redirectTo : '/'
  });
});
app.controller('myctrl',function ($scope,$location,$rootScope) {
  $scope.submit=function() {
    if($scope.name =="admin" && $scope.password == "admin"){
      $routeProvider.loggedIn=true;
     $location.path('/dashboard');
   }else {
     alert("wrong input");
   };
  };
});
