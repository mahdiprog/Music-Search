﻿describe('ArtistController', function () {
    beforeEach(module('app'));

    var $controller, rootScope, mockDataSvc;

    beforeEach(function () {
        module(function($provide){
            $provide.factory('spotifyService', ['$q', function($q){
                function getAlbumsofArtist(artistId, start, count) {

                    return $q.when({ "data": { "href": "https://api.spotify.com/v1/artists/0QwH5InvCwfL4UbYkjP9pi/albums?offset=0&limit=30&album_type=single,album,compilation,appears_on,ep", "items": [{ "album_type": "album", "artists": [{ "external_urls": { "spotify": "https://open.spotify.com/artist/0QwH5InvCwfL4UbYkjP9pi" }, "href": "https://api.spotify.com/v1/artists/0QwH5InvCwfL4UbYkjP9pi", "id": "0QwH5InvCwfL4UbYkjP9pi", "name": "Bark Psychosis", "type": "artist", "uri": "spotify:artist:0QwH5InvCwfL4UbYkjP9pi" }], "available_markets": ["AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TR", "TW", "US", "UY"], "external_urls": { "spotify": "https://open.spotify.com/album/45uGlDLVIHnO3jiCSrRPbS" }, "href": "https://api.spotify.com/v1/albums/45uGlDLVIHnO3jiCSrRPbS", "id": "45uGlDLVIHnO3jiCSrRPbS", "images": [{ "height": 640, "url": "https://i.scdn.co/image/19df535ec063f344d1b299b138952ca5a9235015", "width": 640 }, { "height": 300, "url": "https://i.scdn.co/image/5d5a3d07e632a3b1c120f0dcd8bd321061669cf2", "width": 300 }, { "height": 64, "url": "https://i.scdn.co/image/50f0e9402f174718f50122fdde75f841d04529d9", "width": 64 }], "name": "Codename: Dustsucker", "type": "album", "uri": "spotify:album:45uGlDLVIHnO3jiCSrRPbS" }, { "album_type": "album", "artists": [{ "external_urls": { "spotify": "https://open.spotify.com/artist/0QwH5InvCwfL4UbYkjP9pi" }, "href": "https://api.spotify.com/v1/artists/0QwH5InvCwfL4UbYkjP9pi", "id": "0QwH5InvCwfL4UbYkjP9pi", "name": "Bark Psychosis", "type": "artist", "uri": "spotify:artist:0QwH5InvCwfL4UbYkjP9pi" }], "available_markets": ["AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TR", "TW", "US", "UY"], "external_urls": { "spotify": "https://open.spotify.com/album/5yWxoUPj9UREuIgwVfJeW7" }, "href": "https://api.spotify.com/v1/albums/5yWxoUPj9UREuIgwVfJeW7", "id": "5yWxoUPj9UREuIgwVfJeW7", "images": [{ "height": 640, "url": "https://i.scdn.co/image/15a08d1523a723af6466ef35adb8e8ba5c4429ac", "width": 640 }, { "height": 300, "url": "https://i.scdn.co/image/86691d3c9e1a485271fbe7cc94b246c9af43fc4a", "width": 300 }, { "height": 64, "url": "https://i.scdn.co/image/d70e2b1db17f21de31168fa3ba56dd305ba07ab3", "width": 64 }], "name": "Codename: Dustsucker", "type": "album", "uri": "spotify:album:5yWxoUPj9UREuIgwVfJeW7" }, { "album_type": "album", "artists": [{ "external_urls": { "spotify": "https://open.spotify.com/artist/0QwH5InvCwfL4UbYkjP9pi" }, "href": "https://api.spotify.com/v1/artists/0QwH5InvCwfL4UbYkjP9pi", "id": "0QwH5InvCwfL4UbYkjP9pi", "name": "Bark Psychosis", "type": "artist", "uri": "spotify:artist:0QwH5InvCwfL4UbYkjP9pi" }], "available_markets": ["AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TR", "TW", "US", "UY"], "external_urls": { "spotify": "https://open.spotify.com/album/7j98uMKCZuBQU1SPcrQAxP" }, "href": "https://api.spotify.com/v1/albums/7j98uMKCZuBQU1SPcrQAxP", "id": "7j98uMKCZuBQU1SPcrQAxP", "images": [{ "height": 600, "url": "https://i.scdn.co/image/33053a33643ad99923dbad63347e579caf83194a", "width": 600 }, { "height": 300, "url": "https://i.scdn.co/image/c2855165801ab81d16b12ee09775fea86bcffcc7", "width": 300 }, { "height": 64, "url": "https://i.scdn.co/image/0dfdb552cdeb1bd3f750fb8a66807095344d2cb3", "width": 64 }], "name": "Hex", "type": "album", "uri": "spotify:album:7j98uMKCZuBQU1SPcrQAxP" }, { "album_type": "single", "artists": [{ "external_urls": { "spotify": "https://open.spotify.com/artist/0QwH5InvCwfL4UbYkjP9pi" }, "href": "https://api.spotify.com/v1/artists/0QwH5InvCwfL4UbYkjP9pi", "id": "0QwH5InvCwfL4UbYkjP9pi", "name": "Bark Psychosis", "type": "artist", "uri": "spotify:artist:0QwH5InvCwfL4UbYkjP9pi" }], "available_markets": ["AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TR", "TW", "US", "UY"], "external_urls": { "spotify": "https://open.spotify.com/album/79mAiDPhJ15IiH9ieQ4JVU" }, "href": "https://api.spotify.com/v1/albums/79mAiDPhJ15IiH9ieQ4JVU", "id": "79mAiDPhJ15IiH9ieQ4JVU", "images": [{ "height": 640, "url": "https://i.scdn.co/image/dd2d333c794b355fbc30bf48e018d98c674b1818", "width": 640 }, { "height": 300, "url": "https://i.scdn.co/image/4e8f24a9623af1aba3ae35283bed8a14c8a3b346", "width": 300 }, { "height": 64, "url": "https://i.scdn.co/image/80eac2d96a8d63ab472db88db4a56efba52f842e", "width": 64 }], "name": "400 Winters", "type": "album", "uri": "spotify:album:79mAiDPhJ15IiH9ieQ4JVU" }, { "album_type": "single", "artists": [{ "external_urls": { "spotify": "https://open.spotify.com/artist/0QwH5InvCwfL4UbYkjP9pi" }, "href": "https://api.spotify.com/v1/artists/0QwH5InvCwfL4UbYkjP9pi", "id": "0QwH5InvCwfL4UbYkjP9pi", "name": "Bark Psychosis", "type": "artist", "uri": "spotify:artist:0QwH5InvCwfL4UbYkjP9pi" }], "available_markets": ["AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TR", "TW", "US", "UY"], "external_urls": { "spotify": "https://open.spotify.com/album/6qtVXQAU3WSfwczv3LADCn" }, "href": "https://api.spotify.com/v1/albums/6qtVXQAU3WSfwczv3LADCn", "id": "6qtVXQAU3WSfwczv3LADCn", "images": [{ "height": 600, "url": "https://i.scdn.co/image/f6aac1f3f6d9fb80706795042fc1ab25b536ef7a", "width": 600 }, { "height": 300, "url": "https://i.scdn.co/image/3d23a7f85f1dadc833422eae72fb873b8ca24252", "width": 300 }, { "height": 64, "url": "https://i.scdn.co/image/e7c553e808f635dfed412b994c8d201959e989de", "width": 64 }], "name": "A Street Scene", "type": "album", "uri": "spotify:album:6qtVXQAU3WSfwczv3LADCn" }, { "album_type": "single", "artists": [{ "external_urls": { "spotify": "https://open.spotify.com/artist/0QwH5InvCwfL4UbYkjP9pi" }, "href": "https://api.spotify.com/v1/artists/0QwH5InvCwfL4UbYkjP9pi", "id": "0QwH5InvCwfL4UbYkjP9pi", "name": "Bark Psychosis", "type": "artist", "uri": "spotify:artist:0QwH5InvCwfL4UbYkjP9pi" }], "available_markets": ["AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TR", "TW", "US", "UY"], "external_urls": { "spotify": "https://open.spotify.com/album/2yqsk9PAonw79ZBxYYlsVk" }, "href": "https://api.spotify.com/v1/albums/2yqsk9PAonw79ZBxYYlsVk", "id": "2yqsk9PAonw79ZBxYYlsVk", "images": [{ "height": 600, "url": "https://i.scdn.co/image/8a1ee8a5bf0ef01ba4272a22afec8a3364f29348", "width": 600 }, { "height": 300, "url": "https://i.scdn.co/image/a09e933dcf7a95fece323e4663d63a26e5c81e64", "width": 300 }, { "height": 64, "url": "https://i.scdn.co/image/c96a4ce5b7b1e3a9dc8151f4b27f6d9d1974f39c", "width": 64 }], "name": "Blue", "type": "album", "uri": "spotify:album:2yqsk9PAonw79ZBxYYlsVk" }, { "album_type": "album", "artists": [{ "external_urls": { "spotify": "https://open.spotify.com/artist/0QwH5InvCwfL4UbYkjP9pi" }, "href": "https://api.spotify.com/v1/artists/0QwH5InvCwfL4UbYkjP9pi", "id": "0QwH5InvCwfL4UbYkjP9pi", "name": "Bark Psychosis", "type": "artist", "uri": "spotify:artist:0QwH5InvCwfL4UbYkjP9pi" }], "available_markets": ["AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TR", "TW", "US", "UY"], "external_urls": { "spotify": "https://open.spotify.com/album/6UTR87c0FbCW5SgPllqOok" }, "href": "https://api.spotify.com/v1/albums/6UTR87c0FbCW5SgPllqOok", "id": "6UTR87c0FbCW5SgPllqOok", "images": [{ "height": 640, "url": "https://i.scdn.co/image/72a364aabacce503971ce9a1b6bf534975a9a763", "width": 640 }, { "height": 300, "url": "https://i.scdn.co/image/9e24e3d696f58338e8a4685d78c14194368f2a28", "width": 300 }, { "height": 64, "url": "https://i.scdn.co/image/92f6d660f28cdef5ea4d815f395db6d08b0fbba4", "width": 64 }], "name": "400 Winters", "type": "album", "uri": "spotify:album:6UTR87c0FbCW5SgPllqOok" }], "limit": 30, "next": null, "offset": 0, "previous": null, "total": 7 }, "status": 200, "config": { "method": "GET", "transformRequest": [null], "transformResponse": [null], "jsonpCallbackParam": "callback", "url": "https://api.spotify.com/v1/artists/0QwH5InvCwfL4UbYkjP9pi/albums?offset=0&limit=30", "headers": { "Accept": "application/json, text/plain, */*" } }, "statusText": "OK" });

                }
                return{
                    getAlbumsofArtist: getAlbumsofArtist
                };
            }]);
        });
    });

    beforeEach(inject(function (_$controller_, spotifyService, $rootScope) {
        rootScope = $rootScope;
        mockDataSvc = spotifyService;
        spyOn(mockDataSvc, 'getAlbumsofArtist').and.callThrough();

        // The injector unwraps the underscores (_) from around the parameter names when matching
        $controller = _$controller_;
        $controller = $controller('ArtistController', { $routeParams: { id: 'test' }, spotifyService: mockDataSvc });
    }));

    it('should be defined and call services', function () {
        expect($controller).toBeDefined();
        rootScope.$digest();
        expect(mockDataSvc.getAlbumsofArtist).toHaveBeenCalled();
    });

    describe('getAlbums', function() {
        it('call getAlbumsofArtist from spotifyService', function () {
            var controller = $controller;

            controller.loadedAlbumsCount = 10;
            controller.itemsToLoadCount = 20;
            controller.albums = [];
            
            controller.getAlbums();
            expect(controller.loadingAlbums).toBeTruthy();
            rootScope.$digest();
            expect(controller.loadingAlbums).not.toBeTruthy();
            expect(controller.albums.length).toBeGreaterThan(0);
            expect(controller.albums[0].name).toBeDefined();
            expect(controller.albums[0].image).toBeDefined();
            expect(controller.totalAlbums).toBe(7);
            expect(mockDataSvc.getAlbumsofArtist).toHaveBeenCalledWith('test', 10, 20);
        });
    });
});