 (function() {
    'use strict';

    /**
     * Get the main module (shared for Workout).
     */
    angular.module(appName)
        /**
         * Login Controller.
         */
        .controller('AnnouncementDetailsController', AnnouncementDetails);


    AnnouncementDetails.$inject = ['$state', '$filter'];

    function AnnouncementDetails($state, $filter) {
        var announcementDetailsVm = this;
        // Variable declarations
        announcementDetailsVm.currentUser = {};
        announcementDetailsVm.currentUser.email = "";
        announcementDetailsVm.currentUser.password = "";

        // Function declarations
        announcementDetailsVm.authinticateUser = authinticateUser;
        announcementDetailsVm.SignUp = SignUp;

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