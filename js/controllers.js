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
          stars: 4,
          nationality: "Spanish"
          
      },
      {
          Employee: {
          givenName: 'Henry',
              familyName: 'Kirkness'
          },
          stars: 5,
          nationality: "English"
          
      },
      {
          Employee: {
          givenName: 'Filipe',
              familyName: 'Massa'
          },
          stars: 4,
          nationality: "Spanish"
      },
      {
          Employee: {
          givenName: 'Valtteri',
              familyName: 'Bottas'
          },
          stars: 3,
          nationality: "Italien"
      }
    ];
    $scope.yesPile = [];
    $scope.noPile = [];

    $scope.swipeLeft = function() {
      var num = 'tr:nth-of-type('+($scope.employeesList.length).toString()+')';
        $(num).addClass('turnLeft');
        setTimeout(function(){  
          $(num).addClass('moveLeft');
          $scope.noPile.push($scope.employeesList[$scope.employeesList.length-1]); //pop from the top
          $scope.employeesList.splice($scope.employeesList.length-1, 1);
        }, 500);
    }
      $scope.swipeRight = function() {
        var num = 'tr:nth-of-type('+($scope.employeesList.length).toString()+')';
        $(num).addClass('turnRight');
        setTimeout(function(){  
          $(num).addClass('moveRight');
          $scope.yesPile.push($scope.employeesList[$scope.employeesList.length-1]); //pop from the top
          $scope.employeesList.splice($scope.employeesList.length-1, 1);
        }, 500);
    }
});