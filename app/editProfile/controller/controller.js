 (function() {
    'use strict';

    /**
     * Get the main module (shared for Workout).
     */
    angular.module(appName)
        /**
         * Login Controller.
         */
        .controller('EditProfileController', EditProfile);


    EditProfile.$inject = ['$state', '$filter'];

    function EditProfile($state, $filter) {
        var editProfileVm = this;
        // Variable declarations
        editProfileVm.currentUser = {};
        editProfileVm.currentUser.email = "";
        editProfileVm.currentUser.password = "";

        // Function declarations
        editProfileVm.authinticateUser = authinticateUser;
        editProfileVm.SignUp = SignUp;

        activate();

        function activate() {
            // To initialize anything before the project starts
        }


        function authinticateUser() {
            console.log("Clicked on authenticate user");
            $state.go('header.home');
        }

        function SignUp() {
            $state.go('registration');
        }
    }

})();