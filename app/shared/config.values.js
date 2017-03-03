(function() {

    var prefix = "http://localhost:4567/";
    var API_URL = {
        serverUrl: prefix,
        login: prefix + "login",
        getAnnouncement: prefix + "getAnnouncement",
        getNotifications: prefix + "getNotifications",
        sendFeedback: prefix + "sendFeedback",
        editUserDetails: prefix + "editUserDetails",
        fileUpload: prefix + "upload",
        applyJob: prefix + "applyJob"
    };

    function recalculateUrls(prefix) {
        console.log(API_URL);
        console.log(prefix);
        API_URL = {
            serverUrl: prefix,
            login: prefix + "login"
        }
        console.log(API_URL);
        config.API_URL = API_URL;
    }

    var userDetails = {};

    var config = {
        API_URL: API_URL,
        userDetails: userDetails,
        prefix: prefix,
        recalculateUrls: recalculateUrls
    };

    angular.module(appName).value('config', config);
})()