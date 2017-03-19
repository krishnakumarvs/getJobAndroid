(function() {
    'use strict';

    /**
     * Get the main module (shared for Workout).
     */
    angular.module(appName)
        /**
         * Registration Controller.
         */
        .controller('ChangePasswordController', ChangePassword);

    ChangePassword.$inject = ['$state', '$filter', 'config', '$http'];

    function ChangePassword($state, $filter, config, $http) {
        var changePasswordVm = this;
       
        changePasswordVm.passwordss = passwordss;
        changePasswordVm.newUser = {};

        var confirmPassword = "";

        activate();

        function activate () {
            if (!config.userDetails.name) {
                $state.go('login');
            }
        }

        function passwordss() {
            
            if(changePasswordVm.newUser.new_pass == changePasswordVm.newUser.conf_pass) {
                $http({
                    method: "POST",
                    url: config.API_URL.changePassword,
                    data: {
                        currentPass: changePasswordVm.newUser.current_pass,
                        newPass: changePasswordVm.newUser.new_pass,
                        userId: config.userDetails.userId
                    }
                }).then(function mySucces(response) {
                    var api_result = response.data.result;
                    if (api_result) {
                        alert(response.data.description);
                        $state.go('home');
                    } else {
                        alert(response.data.description);
                        changePasswordVm.newUser = {};
                    }
                }, function myError(response) {
                    console.log(response.statusText);
                });
            } else {
                alert("Please check the new passwords");
                changePasswordVm.newUser.new_pass ="" ;
                changePasswordVm.newUser.conf_pass = "";
            }
            

            /*alert("successfull");
            $state.go('home');*/
                           
        }
    }

})();