tableApp.controller("LoginCtrl", function ($scope, $uibModalInstance, $http, $location, activeUser, User) {
    
        // TODO: Detele this
        $scope.firstName = "Michael";
        $scope.lastName = "Lang";
        $scope.password = "langm";
    
        $http.get("app/data/users.json").then(function (response) {
            $scope.users = [];
            for (var i = 0; i < response.data.length; i++) {
                $scope.users.push(new User(response.data[i]));
            }
    
            //console.log(JSON.stringify($scope.users));
        });
    
        $scope.failedAttempt = false;
    
        $scope.login = function() {
            var user = getLoggedInUser();
            if (user != null) {
                activeUser.login(user);
                $uibModalInstance.close("Logged-in");
                $location.path("/main")
            } else {
                $scope.failedAttempt = true;
            }
    
    
    
    
            //console.log($scope.email + " " + $scope.password)
        }
    
        var getLoggedInUser = function() {
            for (var i = 0; i < $scope.users.length; i++) {
                if ($scope.users[i].firstName === $scope.firstName && $scope.users[i].lastName === $scope.lastName && $scope.users[i].password === $scope.password) {
                    return $scope.users[i];
                }
            }
            return null;
        }
    
        $scope.dismiss = function () {
            $uibModalInstance.close("User dismissed");
        }
    });
    