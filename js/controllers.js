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
       $('body').css('background','rgba(204, 41, 0,0.9  ');
        $(num).addClass('turnLeft');
        setTimeout(function(){  
          $('body').css('background','#e6e6e6');
          $(num).addClass('moveLeft');
          $scope.noPile.push($scope.employeesList[$scope.employeesList.length-1]); //pop from the top
          $scope.employeesList.splice($scope.employeesList.length-1, 1);
        }, 500);
    }
      $scope.swipeRight = function() {
        var num = 'tr:nth-of-type('+($scope.employeesList.length).toString()+')';
        $(num).addClass('turnRight');
        $('body').css('background','rgb(133, 224, 133)');
        setTimeout(function(){  
          $(num).addClass('moveRight');
          $('body').css('background','#e6e6e6');
          $scope.yesPile.push($scope.employeesList[$scope.employeesList.length-1]); //pop from the top
          $scope.employeesList.splice($scope.employeesList.length-1, 1);
        }, 500);
    }
});