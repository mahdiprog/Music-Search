(function () {
    'use strict';
    
    angular.module('app')
    .service('spotifyService', spotifyService);

    spotifyService.$inject = ['$http', 'constantsService'];

    function spotifyService($http, constantsService) {
    return {
        getArtists: getArtists,
        getAlbums: getAlbums,
        getAlbumAndArtists: getAlbumAndArtists,
        getAlbumsofArtist: getAlbumsofArtist
    };

    function getArtists(text, start,count) {
        return $http({
            method: "GET",
            url: constantsService.apiUrl + "search?type=artist&q=" + text + "&offset=" + start + "&limit=" + count
        });

    }
    function getAlbums(text, start, count) {
        return $http({
            method: "GET",
            url: constantsService.apiUrl + "search?type=album&q=" + text + "&offset=" + start + "&limit=" + count
        });

    }

    function getAlbumAndArtists(text, start, count) {
        return $http({
            method: "GET",
            url: constantsService.apiUrl + "search?type=artist,album&q=" + text + "&offset=" + start + "&limit=" + count
        });

    }
    function getAlbumsofArtist(artistId, start, count) {
        return $http({
            method: "GET",
            url: constantsService.apiUrl + "artists/" + artistId + "/albums?offset=" + start + "&limit=" + count
        });

    }
}
})();