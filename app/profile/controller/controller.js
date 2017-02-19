 (function() {
    'use strict';

    /**
     * Get the main module (shared for Workout).
     */
    angular.module(appName)
        /**
         * Login Controller.
         */
        .controller('ProfileController', Profile);


    Profile.$inject = ['$state', '$filter'];

    function Profile($state, $filter) {
        var profileVm = this;
        // Variable declarations
        profileVm.currentUser = {};
        profileVm.currentUser.email = "";
        profileVm.currentUser.password = "";

        // Function declarations
        profileVm.authinticateUser = authinticateUser;
        profileVm.SignUp = SignUp;

        activate();

        function activate() {
            // To initialize anything before the project starts
        }


        function authinticateUser() {
            console.log("Clicked on authenticate user");
            $state.go('editProfile');
        }

        function SignUp() {
            $state.go('registration');
        }
    }

})();