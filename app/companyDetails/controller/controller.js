 (function() {
     'use strict';

     angular.module(appName)
        
         .controller('CompanyDetailsController', CompanyDetails);


     Profile.$inject = ['$state', '$filter', 'config'];

     function CompanyDetails($state, $filter, config) {
         var companyDetailsVm = this;
         // Variable declarations
         companyDetailsVm.currentUser = {};

        
         activate();

         function activate() {
             if (!config.userDetails.name) {
                 $state.go('login');
             } else {
                 companyDetailsVm.userDetails = config.userDetails;
                 if (config.userDetails.photo) {
                     companyDetailsVm.userImage = config.API_URL.serverUrl + config.userDetails.photo;
                 } else {
                     companyDetailsVm.userImage = "img/person.png";
                 }
                 console.log("companyDetailsVm.userImage" + companyDetailsVm.userImage);
             }
         }


       
     }

 })();