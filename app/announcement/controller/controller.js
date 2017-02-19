(function() {
    'use strict';

    /**
     * Get the main module (shared for Workout).
     */
    angular.module(appName)
        /**
         * Login Controller.
         */
        .controller('AnnouncementController', Announcement);


    Announcement.$inject = ['$state', '$filter'];

    function Announcement($state, $filter) {
        var announcementVm = this;
        // Variable declarations
        announcementVm.currentUser = {};
        announcementVm.currentUser.email = "";
        announcementVm.currentUser.password = "";

        // Function declarations
        announcementVm.authinticateUser = authinticateUser;
        announcementVm.SignUp = SignUp;

        activate();

        function activate() {
            // To initialize anything before the project starts
        }


        function authinticateUser() {
            console.log("Clicked on authenticate user");
            $state.go('announcementDetails');
        }

        function SignUp() {
            $state.go('registration');
        }
    }

})();