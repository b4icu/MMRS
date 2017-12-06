tableApp.controller("DisplayCtrl", function ($scope, $interval) {

    var tday = new Array("Sun.", "Mon.", "Tue.", "Wed.", "Thu.", "Fri.", "Sat.");
    var tmonth = new Array("Jan.", "Feb.", "Mar.", "Apr.", "May", "June", "July", "Aug.", "Sep.", "Oct.", "Nov.", "Dec.");


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

        $scope.currentDateTime = "" + tday[nday] + ", " + tmonth[nmonth] + " " + ndate + ", " + nyear + " " + nhour + ":" + nmin + ":" + nsec + " " + ap;
        $scope.currentTime = "" + nhour + ":" + nmin;
    }

    $interval(GetClock, 1000);


})

// tableApp.controller("TableCtrl", function ($scope, $http, Reservation) {

    $scope.reservations = [];

    $http.get("app/data/reservations.json").then(function (response) {
        for (var i = 0; i < response.data.length; i++) {
            $scope.reservations.push(new Reservation(response.data[i]))
        }
}); 
