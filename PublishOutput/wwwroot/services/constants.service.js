(function () {
    'use strict';

    angular.module('app')
   .service('constantsService', constantsService);

    function constantsService() {
        return {
            apiUrl: "https://api.spotify.com/v1/",
            generalErrorMessage:"Could not connect to server, please try again."
        }
    }
})();