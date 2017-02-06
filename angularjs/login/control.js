var app=angular.module('myapp',["ngRoute"]);
app.config(function($routeProvider) {
  $routeProvider
  .when("/",{
    templateUrl : 'form.html'
  })
  .when("/login1",{
    templateUrl : 'login1.html'
  })
  .otherwise({
    redirectTo : '/'
  });
});
 app.controller('myctrl',function ($scope,$location) {
   $scope.submit=function () {
     if($scope.username =="admin" && $scope.password == "admin"){
     $location.path('/login1');
   }else{
     alert('wrong input');
   };
     };
 });
