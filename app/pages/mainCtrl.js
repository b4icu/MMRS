tableApp.controller("MainCtrl", function ($scope, $interval) {

  var tday = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
  var tmonth = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");


  function GetClock() {
    var d = new Date();
    var nday = d.getDay(), nmonth = d.getMonth(), ndate = d.getDate(), nyear = d.getFullYear();
    var nhour = d.getHours(), nmin = d.getMinutes(), nsec = d.getSeconds(), ap;

    if (nhour == 0) { ap = " AM"; nhour = 12; }
    else if (nhour < 12) { ap = " AM"; }
    else if (nhour == 12) { ap = " PM"; }
    else if (nhour > 12) { ap = " PM"; nhour -= 12; }

    if (nmin <= 9) nmin = "0" + nmin;
    if (nsec <= 9) nsec = "0" + nsec;

    $scope.currentDateTime = "" + tday[nday] + ", " + tmonth[nmonth] + " " + ndate + ", " + nyear + "    " + nhour + ":" + nmin
  }

  $interval(GetClock, 1000);


})

tableApp.controller("TableCtrl", function ($scope, $http, Table) {




  $scope.tables = [];

  $http.get("app/data/tables.json").then(function (response) {
    for (var i = 0; i < response.data.length; i++) {
      $scope.tables.push(new Table(response.data[i]))
    }
  });


  $scope.changePicture = function (currentTable) {
    if (currentTable.currentImage === currentTable.img1) {
      currentTable.currentImage = currentTable.img0;
      currentTable.res = "free";
    } else {
      currentTable.currentImage = currentTable.img1;
      currentTable.res = "reserved";
    }
  }
});

