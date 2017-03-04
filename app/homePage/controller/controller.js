(function() {
    'use strict';

    /**
     * Get the main module (shared for Workout).
     */
    angular.module(appName)
    /**
     * Task Page Controller.
     */
    .controller('HomePageController', Home);

    Home.$inject = ['$state'];

    function Home($state) {
        var tasksVm = this;
        tasksVm.GotoViewTask = GotoViewTask;
        tasksVm.goToCompanyDetails = goToCompanyDetails;
       
        activate();

        function activate() {

        }

        function GotoViewTask () {
             
            
        }

        function goToCompanyDetails(){
            console.log("Go to company details");
             $state.go('companyDetails');
        }
    }
})();