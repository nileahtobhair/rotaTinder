<!DOCTYPE html>
<html>
<head>
  <title>Tinder</title>
</head>

<body ng-app="F1FeederApp" ng-controller="driversController">
  <table>
    <thead>
      <tr><th colspan="4">Drivers Championship Standings</th></tr>
    </thead>
    <tbody>
      <tr ng-repeat="driver in driversList">
        <td>{{$index + 1}}</td>
        <td>
          <img src="img/flags/{{driver.Driver.nationality}}.png" />
          {{driver.Driver.givenName}}&nbsp;{{driver.Driver.familyName}}
        </td>
        <td>{{driver.Constructors[0].name}}</td>
        <td>{{driver.points}}</td>
      </tr>
    </tbody>
  </table>
  <script src="js/app.js"></script>
  <script src="js/services.js"></script>
  <script src="js/controllers.js"></script>
  <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.9/angular.min.js"></script>
</body>
</html>