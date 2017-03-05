(function() {
    'use strict';

    /**
     * Get the main module (shared for Workout).
     */
    angular.module(appName)
        /**
         * Login Controller.
         */
        .controller('LoginController', Login);

    Login.$inject = ['$state', '$filter', '$http', 'config'];

    function Login($state, $filter, $http, config) {
        var loginVm = this;
        // Variable declarations
        loginVm.currentUser = {};
        loginVm.currentUser.email = "manu@gmail.com";
        loginVm.currentUser.password = "mannu";

        // Function declarations
        loginVm.authinticateUser = authinticateUser;
        loginVm.SignUp = SignUp;
        loginVm.ForgotPassword = ForgotPassword;

        activate();

        function activate() {
            // To initialize anything before the project starts
        }

        function authinticateUser() {
            console.log("Clicked on authenticate user " + config.API_URL.login);
            console.log(loginVm.currentUser);
            $http({
                method: "POST",
                url: config.API_URL.login,
                data: {
                    username: loginVm.currentUser.email,
                    password: loginVm.currentUser.password
                }
            }).then(function mySucces(response) {
                console.log(response.data);
                var api_result = response.data.result;
                if (api_result) {
                    console.log("Authentication success");
                    $state.go('header.home');
                    config.userDetails = response.data.payload;
                } else {
                    alert(response.data.description);
                }
            }, function myError(response) {
                console.log(response.statusText);
                alert(response.statusText)
            });

            //$state.go('header.home');
        }

        function SignUp() {
            $state.go('registration'); //change state go to app.module
        }


        function ForgotPassword(){
            $state.go('forgotPassword');
        }
    }

})();