angular.module('F1FeederApp.controllers', ['ngTouch']).
controller('driversController', function($scope) {
    $scope.employeesList = [
      {
          Employee: {
              givenName: 'Sebastian',
              familyName: 'Vettel'
          },
          stars: 3,
          nationality: "German"
      },
      {
          Employee: {
          givenName: 'Fernando',
              familyName: 'Alonso'
          },
          stars: 3,
          nationality: "Spanish"
          
      },
      {
          Employee: {
          givenName: 'Henry',
              familyName: 'Kirkness'
          },
          stars: 5,
          nationality: "English"
          
      }
    ];
    $scope.yesPile = [];
    $scope.noPile = [];
    $scope.swipeLeft = function() {
        $scope.yesPile.push($scope.employeesList[$scope.employeesList.length-1]); //pop from the top
        $scope.employeesList.splice($scope.employeesList.length-1, 1);
    }
      $scope.swipeRight = function() {
        $scope.noPile.push($scope.employeesList[$scope.employeesList.length-1]); //pop from the top
        $scope.employeesList.splice($scope.employeesList.length-1, 1);
    }
});