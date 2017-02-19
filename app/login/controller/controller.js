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

    Login.$inject = ['$state', '$filter'];  //to add state and filter to this page

    function Login($state, $filter) {
        var loginVm = this;
        // Variable declarations
        loginVm.currentUser = {};
        loginVm.currentUser.email = "";  //automaticatically value is stored during typing
        loginVm.currentUser.password = "";

        // Function declarations
        loginVm.authinticateUser = authinticateUser;      //    variable/function declaration(may be)
        loginVm.SignUp = SignUp;

        activate();

        function activate() {
            // To initialize anything before the project starts
        }


        function authinticateUser() {
            console.log("Clicked on authenticate user");//check error
            $state.go('header.home');
        }

        function SignUp() {
            $state.go('registration');//change state go to app.module
        }
    }

})();