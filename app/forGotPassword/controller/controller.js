(function() {
    'use strict';

    /**
     * Get the main module (shared for Workout).
     */
    angular.module(appName)
        /**
         * Registration Controller.
         */
        .controller('ForgotPasswordController', ForgotPassword);

    ForgotPassword.$inject = ['$state', '$filter', 'config', '$http'];

    function ForgotPassword($state, $filter, config, $http) {
        var forgotPasswordVm = this;
       
        forgotPasswordVm.passwordss = passwordss;
        forgotPasswordVm.newUser = {};

        var confirmPassword = "";

        function passwordss() {
            
                            alert("successfull");
                            $state.go('login');
                           
        }
    }

})();