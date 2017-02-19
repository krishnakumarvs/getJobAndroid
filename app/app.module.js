var appName = "Kakes";
// Ionic Starter App


angular.module(appName, ['ionic'])

.run(function($ionicPlatform, $rootScope, $state) {
    $rootScope.$state = $state;

    $ionicPlatform.ready(function() {

        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }
    });

    $rootScope.$on('$stateChangeStart', function(e, curr, prev) {

        $rootScope.pageTitle = curr.title;
    });

    $rootScope.$on('$stateChangeSuccess', function(e, curr, prev) {
        $rootScope.currentState = $state.current;

    });
})

.config(function($stateProvider, $urlRouterProvider) {
    //fallback language if entry is not found in current language
    /*$translateProvider.fallbackLanguage('es');*/
    //load language entries from files
    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js


    $stateProvider

    // setup an abstract state for the tabs directive

    .state('header', {
        url: "/",
        templateUrl: "app/shared/templates/header.html",
        controller: 'HeaderController as Header',
        title: 'Header'
    })

    .state('login', {
        url: "/login",
        templateUrl: "app/login/templates/login.html",
        controller: 'LoginController as Login',
        title: 'Login'
    })

      .state('editProfile', {
        url: "/editProfile",
        templateUrl: "app/editProfile/templates/editProfile.html",
        controller: 'EditProfileController as EditProfile',
        title: 'EDIT PROFILE'
    })

    .state('firstPage', {
        url: "/firstPage",
        templateUrl: "app/firstPage/templates/firstPage.html",
        controller: 'LoginController as Login',
        title: 'Login'
    })

    .state('announcementDetails', {
        url: "/announcementDetails",
        templateUrl: "app/announcementDetails/templates/announcementDetails.html",
        controller: 'AnnouncementDetailsController as announcementDetails',
        title: 'ANNOUNCEMENT DETAILS'
    })
    
     

     // .state('editProfile', {
     //     url: "editProfile",
     //     title: 'EDIT PROFILE',
     //     views: {
     //         'menuContent': {
     //             templateUrl: "app/editProfile/templates/editProfile.html",
     //             controller: 'EditProfileController as EditProfile'
     //         }
     //     }
     // })

      .state('header.profile', {
         url: "profile",
         title: 'PROFILE',
         views: {
             'menuContent': {
                 templateUrl: "app/profile/templates/profile.html",
                 controller: 'ProfileController as Profile'
             }
         }
     })
      .state('header.setting', {
         url: "setting",
         title: 'SETTING',
         views: {
             'menuContent': {
                 templateUrl: "app/setting/templates/setting.html",
                 controller: 'SettingController as Setting'
             }
         }
     })
     
 .state('header.announcement', {
         url: "announcement",
         title: 'ANNOUNCEMENT ',
         views: {
             'menuContent': {
                 templateUrl: "app/announcement/templates/announcement.html",
                 controller: 'AnnouncementController as Announcement'
             }
         }
     })
     
.state('header.notification', {
         url: "notification",
         title: 'NOTIFICATION ',
         views: {
             'menuContent': {
                 templateUrl: "app/notification/templates/notification.html",
                 controller: 'NotificationController as Notification'
             }
         }
     })
    

  


 .state('header.feedback', {
        url: "feedback",
        title: 'FEEDBACK',
        views: {
            'menuContent': {
                templateUrl: "app/feedback/templates/feedback.html",
                controller: 'FeedbackController as Feedback'
            }
        }
    })

 .state('header.about', {
        url: "about",
        title: 'ABOUT',
        views: {
            'menuContent': {
                templateUrl: "app/about/templates/about.html",
                controller: 'AboutController as About'
            }
        }
    })


.state('header.help', {
        url: "help",
        title: 'HELP',
        views: {
            'menuContent': {
                templateUrl: "app/help/templates/help.html",
                controller: 'HelpController as Help'
            }
        }
    })

    .state('header.home', {
        url: "home",
        title: 'HOME',
        views: {
            'menuContent': {
                templateUrl: "app/homePage/templates/homePage.html",
                controller: 'HomePageController as Home'
            }
        }
    })

// .state('header.registration', {
//         url: "registration",
//         title: 'REGISTRATION',
//         views: {
//             'menuContent': {
//                 templateUrl: "app/registration/templates/registration.html",
//                 controller: 'RegistrationController as Registration'
//             }
//         }
//     })

.state('registration', {
        url: "/registration",
        templateUrl: "app/registration/templates/registration.html",
        controller: 'RegistrationController as Registration',
        title: 'REGISTRATION'
    })
  

    .state('header.settings', {
        url: "settings",
        parent: 'header',
        showHeader: true,
        title: 'SETTINGS',
        views: {
            'menuContent': {
                templateUrl: "app/settings/templates/settings.html",
                controller: 'SettingsController as Settings'
            }
        }

    });

    //mockResult

    /*.state('header.dashboard', {
        url: "dashboard",
        title: 'DashBoard',
        parent: 'header',
        showHeader: true,
        views: {
            'menuContent': {
                templateUrl: "app/templates/dashboard.html",
                controller: 'HomePageController as HomePage'
            }
        }
    })*/

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/login');

});