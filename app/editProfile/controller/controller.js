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

     EditProfile.$inject = ['$state', '$filter', 'config', '$http'];

     function EditProfile($state, $filter, config, $http) {
         var editProfileVm = this;
         // Variable declarations
         editProfileVm.editUserDetails = editUserDetails;
         var pic = "";
         var picResume = "";

         var backendUrl = config.API_URL.fileUpload;
         var backendUrlResume = config.API_URL.fileUploadResume;

         function getFileExtension(filename) {
             var ext = /^.+\.([^.]+)$/.exec(filename);
             return ext == null ? "" : ext[1];
         }

         activate();

         function activate() {
             if (!config.userDetails.name) {
                 $state.go('login');
             } else {
                 editProfileVm.userDetails = config.userDetails;
                 if (config.userDetails.photo) {
                     editProfileVm.userImage = config.API_URL.serverUrl + config.userDetails.photo;
                 } else {
                     editProfileVm.userImage = "img/person.png";
                 }
                 console.log("editProfileVm.userImage" + editProfileVm.userImage);
             }
         }

         function editUserDetails() {

             if (document.getElementById('fileupload').files[0]) {
                 pic = new Date().getTime() + "." + getFileExtension(document.getElementById('fileupload').files[0].name);
                 uploadImage();
             }

             if (document.getElementById('fileupload_res').files[0]) {
                picResume = new Date().getTime() + "_res." + getFileExtension(document.getElementById('fileupload_res').files[0].name);
                uploadResume();
             }



             $http({
                 method: "POST",
                 url: config.API_URL.editUserDetails,
                 data: {
                     userId: config.userDetails.userId,
                     name: editProfileVm.userDetails.name,
                     address: editProfileVm.userDetails.address,
                     phone: editProfileVm.userDetails.phone,
                     email_id: editProfileVm.userDetails.email_id,
                     dob: editProfileVm.userDetails.dob,
                     experience: editProfileVm.userDetails.experience,
                     qualification: editProfileVm.userDetails.qualification,
                     pic: (pic) ? pic : config.userDetails.photo,
                     resume: (picResume) ? picResume : config.userDetails.resume
                 }
             }).then(function mySucces(response) {
                 console.log(response.data);
                 var api_result = response.data.result;
                 if (api_result) {
                     alert(response.data.description);
                     config.userDetails = response.data.payload;
                     $state.go('profile');
                 } else {
                     alert(response.data.description);
                 }
             }, function myError(response) {
                 console.log(response.statusText);
             });
         }

         function uploadImage() {
             var fileToBeUploaded = document.getElementById('fileupload').files[0];
             var fd = new FormData();
             fd.append('upfile', fileToBeUploaded);
             $http.post(backendUrl + "?title=" + pic, fd, {
                 transformRequest: angular.identity,
                 headers: {
                     'Content-Type': undefined
                 }
             })

             .success(function(result) {
                 console.log("Succesfully uploaded image");
             })

             .error(function(result) {
                 console.log("Faliure");
             });
         }

         function uploadResume() {
             var fileToBeUploaded = document.getElementById('fileupload_res').files[0];
             var fd = new FormData();
             fd.append('upfile', fileToBeUploaded);
             $http.post(backendUrlResume + "?title=" + picResume, fd, {
                 transformRequest: angular.identity,
                 headers: {
                     'Content-Type': undefined
                 }
             })

             .success(function(result) {
                 console.log("Succesfully uploaded resume");
             })

             .error(function(result) {
                 console.log("Faliure");
             });
         }

     }
 })();