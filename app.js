      var app = angular.module("app", []);

      app.service("data", function() {
        var service = {};

        service.crops = ["Alfalfa",
          "Apple",
          "Barley",
          "Clover",
          "Coffee",
          "Cotton",
          "Dry Bean",
          "Grass-clover mix",
          "Maize",
          "Millet",
          "Oats",
          "Peanut",
          "Perennial grass",
          "Potato",
          "Rice",
          "Rye",
          "Sorghum",
          "Soyabean",
          "Spring wheat",
          "Tea",
          "Tomato",
          "Tree Crop",
          "Vegetable",
          "Winter wheat",
          "Other grain",
          "Other legume",
          "Other N-fixing forage",
          "Other Non-N-fixing forage",
          "Other root crops",
          "Other tuber crop",
          "Other"];

        service.area = ["hectares",
          "acres",
          "square metres"];        

        service.units = ["kilograms",
          "tonnes",
          "litres",
          "tons (US short)",
          "gallon (imperial)",
          "pounds",
          "gallons (US)",
          "units"];

        service.months = ["January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December"];        

        service.years = [2017, 2016, 2015, 2014, 2013, 2012, 2011, 2010];

        service.period = ["start", "middle", "end"];

        return service;
      });

      app.controller('ctrl', function ($scope, $http, data) {

        $scope.data = data;

        $scope.crops = [{}];

        $scope.addCrop = function() {
          $scope.crops.push({});
        }

        $scope.removeCrop = function(crop) {
          var index = $scope.crops.indexOf(crop);
          $scope.crops.splice(index, 1);
        };

        $scope.submit = function() {
          $http.post("http://localhost:8000", $scope.crops);
        };
        
      });