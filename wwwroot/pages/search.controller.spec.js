describe('SearchController', function() {
    beforeEach(module('app'));

    var $controller, rootScope, mockDataSvc;

    beforeEach(function() {
        module(function($provide) {
            $provide.factory('spotifyService', [
                '$q', function($q) {
                    function getArtists(text, start, count) {
                        return $q.when({ "data": { "artists": { "href": "https://api.spotify.com/v1/search?query=esfahani&type=artist&offset=0&limit=30", "items": [{ "external_urls": { "spotify": "https://open.spotify.com/artist/3IGLp0T2tKCevHZ2znDhtT" }, "followers": { "href": null, "total": 741 }, "genres": ["harpsichord"], "href": "https://api.spotify.com/v1/artists/3IGLp0T2tKCevHZ2znDhtT", "id": "3IGLp0T2tKCevHZ2znDhtT", "images": [{ "height": 1500, "url": "https://i.scdn.co/image/7674fef4b51f6cc74f391b9593a8e0e6ad92ddc1", "width": 1000 }, { "height": 960, "url": "https://i.scdn.co/image/5397f02e75a9c056e0809e6101f894468bed077f", "width": 640 }, { "height": 300, "url": "https://i.scdn.co/image/a7b68e8e7a71f562563baf390b9d54330c189939", "width": 200 }, { "height": 96, "url": "https://i.scdn.co/image/08cbfbd84cd500ff2067ea1fcef82b823f6be85b", "width": 64 }], "name": "Mahan Esfahani", "popularity": 28, "type": "artist", "uri": "spotify:artist:3IGLp0T2tKCevHZ2znDhtT" }, { "external_urls": { "spotify": "https://open.spotify.com/artist/1DqM4ENIX53mvRakSSjaTj" }, "followers": { "href": null, "total": 2551 }, "genres": ["persian pop"], "href": "https://api.spotify.com/v1/artists/1DqM4ENIX53mvRakSSjaTj", "id": "1DqM4ENIX53mvRakSSjaTj", "images": [{ "height": 640, "url": "https://i.scdn.co/image/bce0088dcdc0c7c7611b2c56b568804057fdfd39", "width": 640 }, { "height": 300, "url": "https://i.scdn.co/image/80eba9dd455f362b8924e6a5d58a37d8d7d8cbe8", "width": 300 }, { "height": 64, "url": "https://i.scdn.co/image/2e31f874a074d8ddb662d6213e9a57c788cf7a37", "width": 64 }], "name": "Mohammad Esfahani", "popularity": 22, "type": "artist", "uri": "spotify:artist:1DqM4ENIX53mvRakSSjaTj" }, { "external_urls": { "spotify": "https://open.spotify.com/artist/1FH2fDkLAFyRGqenfK3RRL" }, "followers": { "href": null, "total": 236 }, "genres": ["persian pop"], "href": "https://api.spotify.com/v1/artists/1FH2fDkLAFyRGqenfK3RRL", "id": "1FH2fDkLAFyRGqenfK3RRL", "images": [], "name": "Mohammed Esfahani", "popularity": 14, "type": "artist", "uri": "spotify:artist:1FH2fDkLAFyRGqenfK3RRL" }, { "external_urls": { "spotify": "https://open.spotify.com/artist/26gvHhRr5eSsHP0DQEHbjt" }, "followers": { "href": null, "total": 103 }, "genres": [], "href": "https://api.spotify.com/v1/artists/26gvHhRr5eSsHP0DQEHbjt", "id": "26gvHhRr5eSsHP0DQEHbjt", "images": [], "name": "Mohamad Esfahani", "popularity": 0, "type": "artist", "uri": "spotify:artist:26gvHhRr5eSsHP0DQEHbjt" }, { "external_urls": { "spotify": "https://open.spotify.com/artist/6Xy94iwHl4xDlF584PZTOu" }, "followers": { "href": null, "total": 0 }, "genres": [], "href": "https://api.spotify.com/v1/artists/6Xy94iwHl4xDlF584PZTOu", "id": "6Xy94iwHl4xDlF584PZTOu", "images": [], "name": "Tabib Esfahani", "popularity": 0, "type": "artist", "uri": "spotify:artist:6Xy94iwHl4xDlF584PZTOu" }, { "external_urls": { "spotify": "https://open.spotify.com/artist/3oO8kJmSzZ908JgKSUtShU" }, "followers": { "href": null, "total": 52 }, "genres": ["persian traditional"], "href": "https://api.spotify.com/v1/artists/3oO8kJmSzZ908JgKSUtShU", "id": "3oO8kJmSzZ908JgKSUtShU", "images": [{ "height": 640, "url": "https://i.scdn.co/image/e0e30a8a7056512f67f1e90f487c0ebf4456a07d", "width": 640 }, { "height": 300, "url": "https://i.scdn.co/image/18f406fd7ed4b91b8aa0ee0794a02ef68563a73c", "width": 300 }, { "height": 64, "url": "https://i.scdn.co/image/90bdb1f5287b780c4be6efd1c5655f9c498f162b", "width": 64 }], "name": "Taj Esfahani", "popularity": 0, "type": "artist", "uri": "spotify:artist:3oO8kJmSzZ908JgKSUtShU" }, { "external_urls": { "spotify": "https://open.spotify.com/artist/1kjyo0qDAE4FxRSaR8bEuH" }, "followers": { "href": null, "total": 1 }, "genres": [], "href": "https://api.spotify.com/v1/artists/1kjyo0qDAE4FxRSaR8bEuH", "id": "1kjyo0qDAE4FxRSaR8bEuH", "images": [{ "height": 640, "url": "https://i.scdn.co/image/8b903f65998560a4824a5b10046acfde184ae2d4", "width": 640 }, { "height": 300, "url": "https://i.scdn.co/image/e7314fcb03efa3e34d104118e5397484e67e08ff", "width": 300 }, { "height": 64, "url": "https://i.scdn.co/image/e9177a0a4a0480d35849b4c3a9fa5cad347b206b", "width": 64 }], "name": "Sam Esfahani", "popularity": 0, "type": "artist", "uri": "spotify:artist:1kjyo0qDAE4FxRSaR8bEuH" }, { "external_urls": { "spotify": "https://open.spotify.com/artist/1UxuQshY2ARNoPRSjUCxBD" }, "followers": { "href": null, "total": 1 }, "genres": [], "href": "https://api.spotify.com/v1/artists/1UxuQshY2ARNoPRSjUCxBD", "id": "1UxuQshY2ARNoPRSjUCxBD", "images": [], "name": "Naghme Esfahani", "popularity": 0, "type": "artist", "uri": "spotify:artist:1UxuQshY2ARNoPRSjUCxBD" }, { "external_urls": { "spotify": "https://open.spotify.com/artist/3zzMytaDrPte9stltnA4hA" }, "followers": { "href": null, "total": 21 }, "genres": ["persian traditional"], "href": "https://api.spotify.com/v1/artists/3zzMytaDrPte9stltnA4hA", "id": "3zzMytaDrPte9stltnA4hA", "images": [], "name": "Jalal Taj Esfahani", "popularity": 0, "type": "artist", "uri": "spotify:artist:3zzMytaDrPte9stltnA4hA" }, { "external_urls": { "spotify": "https://open.spotify.com/artist/2FM5qDmRxQB6JJoifJHtcy" }, "followers": { "href": null, "total": 0 }, "genres": [], "href": "https://api.spotify.com/v1/artists/2FM5qDmRxQB6JJoifJHtcy", "id": "2FM5qDmRxQB6JJoifJHtcy", "images": [], "name": "Peter Watchorn and Mahan Esfahani", "popularity": 0, "type": "artist", "uri": "spotify:artist:2FM5qDmRxQB6JJoifJHtcy" }], "limit": 30, "next": null, "offset": 0, "previous": null, "total": 10 } }, "status": 200, "config": { "method": "GET", "transformRequest": [null], "transformResponse": [null], "jsonpCallbackParam": "callback", "url": "https://api.spotify.com/v1/search?type=artist&q=esfahani&offset=0&limit=30", "headers": { "Accept": "application/json, text/plain, */*" } }, "statusText": "OK" });
                    }

                    function getAlbums(text, start, count) {
                        return $q.when({ "data": { "albums": { "href": "https://api.spotify.com/v1/search?query=faseleh&type=album&offset=0&limit=30", "items": [{ "album_type": "album", "artists": [{ "external_urls": { "spotify": "https://open.spotify.com/artist/1DqM4ENIX53mvRakSSjaTj" }, "href": "https://api.spotify.com/v1/artists/1DqM4ENIX53mvRakSSjaTj", "id": "1DqM4ENIX53mvRakSSjaTj", "name": "Mohammad Esfahani", "type": "artist", "uri": "spotify:artist:1DqM4ENIX53mvRakSSjaTj" }], "available_markets": ["AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TR", "TW", "US", "UY"], "external_urls": { "spotify": "https://open.spotify.com/album/1CkdKTiwqYZGwOdAgpKaK5" }, "href": "https://api.spotify.com/v1/albums/1CkdKTiwqYZGwOdAgpKaK5", "id": "1CkdKTiwqYZGwOdAgpKaK5", "images": [{ "height": 640, "url": "https://i.scdn.co/image/d5ab72b534a98d8fcbb6dc8f338df84e0f776a77", "width": 640 }, { "height": 300, "url": "https://i.scdn.co/image/94bc96d3e2bc6f6e459c477a324c3082f3ba56e3", "width": 300 }, { "height": 64, "url": "https://i.scdn.co/image/077e57cb4f2fc90fca0669330f5552dbc7741d43", "width": 64 }], "name": "Faseleh", "type": "album", "uri": "spotify:album:1CkdKTiwqYZGwOdAgpKaK5" }, { "album_type": "album", "artists": [{ "external_urls": { "spotify": "https://open.spotify.com/artist/5qHYfvRJiNYAT7GB1uLcHl" }, "href": "https://api.spotify.com/v1/artists/5qHYfvRJiNYAT7GB1uLcHl", "id": "5qHYfvRJiNYAT7GB1uLcHl", "name": "Bijan Arya", "type": "artist", "uri": "spotify:artist:5qHYfvRJiNYAT7GB1uLcHl" }], "available_markets": ["AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TR", "TW", "US", "UY"], "external_urls": { "spotify": "https://open.spotify.com/album/4GwISU3kUTc5s6mof1OggW" }, "href": "https://api.spotify.com/v1/albums/4GwISU3kUTc5s6mof1OggW", "id": "4GwISU3kUTc5s6mof1OggW", "images": [{ "height": 600, "url": "https://i.scdn.co/image/8459dc69f1f785df8f57c6a1a9bda3a1d2edf7ae", "width": 600 }, { "height": 300, "url": "https://i.scdn.co/image/b7d8eb3e7ad95f6aec30097e22ede339cd5bb2b0", "width": 300 }, { "height": 64, "url": "https://i.scdn.co/image/a695735be929f8df350154ad9a6c9d1a71d7008e", "width": 64 }], "name": "Faseleh", "type": "album", "uri": "spotify:album:4GwISU3kUTc5s6mof1OggW" }, { "album_type": "single", "artists": [{ "external_urls": { "spotify": "https://open.spotify.com/artist/1InaenmbomenfTJoZo2GaW" }, "href": "https://api.spotify.com/v1/artists/1InaenmbomenfTJoZo2GaW", "id": "1InaenmbomenfTJoZo2GaW", "name": "Sepideh", "type": "artist", "uri": "spotify:artist:1InaenmbomenfTJoZo2GaW" }], "available_markets": ["AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TR", "TW", "US", "UY"], "external_urls": { "spotify": "https://open.spotify.com/album/5TYhogbybHXpsSekiOUqmq" }, "href": "https://api.spotify.com/v1/albums/5TYhogbybHXpsSekiOUqmq", "id": "5TYhogbybHXpsSekiOUqmq", "images": [{ "height": 640, "url": "https://i.scdn.co/image/e761090ee01759a98956946384790cd8f9b54307", "width": 640 }, { "height": 300, "url": "https://i.scdn.co/image/b443735076d65c3f5f743cacbc8f19fd5aeeac5d", "width": 300 }, { "height": 64, "url": "https://i.scdn.co/image/c17f753eb113a5389e70a82c4d43697ca7d4e6cb", "width": 64 }], "name": "Faseleh", "type": "album", "uri": "spotify:album:5TYhogbybHXpsSekiOUqmq" }, { "album_type": "single", "artists": [{ "external_urls": { "spotify": "https://open.spotify.com/artist/38B7gYv7O8vS6KoYyT2Nnx" }, "href": "https://api.spotify.com/v1/artists/38B7gYv7O8vS6KoYyT2Nnx", "id": "38B7gYv7O8vS6KoYyT2Nnx", "name": "Shahram Behrad", "type": "artist", "uri": "spotify:artist:38B7gYv7O8vS6KoYyT2Nnx" }], "available_markets": ["AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TR", "TW", "US", "UY"], "external_urls": { "spotify": "https://open.spotify.com/album/5TD4DPtl2oxJGfErvW6iUM" }, "href": "https://api.spotify.com/v1/albums/5TD4DPtl2oxJGfErvW6iUM", "id": "5TD4DPtl2oxJGfErvW6iUM", "images": [{ "height": 640, "url": "https://i.scdn.co/image/194385c1120e99a5eb2d0c30d1833c7a54a20cb7", "width": 640 }, { "height": 300, "url": "https://i.scdn.co/image/e5f18ebab68d16f882c0d0193e447539526ac0af", "width": 300 }, { "height": 64, "url": "https://i.scdn.co/image/552ccbd587c04b4706b3ca7db2b8fe7466d9b3a6", "width": 64 }], "name": "Faseleh - Single", "type": "album", "uri": "spotify:album:5TD4DPtl2oxJGfErvW6iUM" }], "limit": 30, "next": null, "offset": 0, "previous": null, "total": 4 } }, "status": 200, "config": { "method": "GET", "transformRequest": [null], "transformResponse": [null], "jsonpCallbackParam": "callback", "url": "https://api.spotify.com/v1/search?type=album&q=faseleh&offset=0&limit=30", "headers": { "Accept": "application/json, text/plain, */*" } }, "statusText": "OK" });
                    }

                    function getAlbumAndArtists(text, start, count) {
                        return $q.when({ "data": { "albums": { "href": "https://api.spotify.com/v1/search?query=faseleh&type=album&offset=0&limit=4", "items": [{ "album_type": "album", "artists": [{ "external_urls": { "spotify": "https://open.spotify.com/artist/1DqM4ENIX53mvRakSSjaTj" }, "href": "https://api.spotify.com/v1/artists/1DqM4ENIX53mvRakSSjaTj", "id": "1DqM4ENIX53mvRakSSjaTj", "name": "Mohammad Esfahani", "type": "artist", "uri": "spotify:artist:1DqM4ENIX53mvRakSSjaTj" }], "available_markets": ["AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TR", "TW", "US", "UY"], "external_urls": { "spotify": "https://open.spotify.com/album/1CkdKTiwqYZGwOdAgpKaK5" }, "href": "https://api.spotify.com/v1/albums/1CkdKTiwqYZGwOdAgpKaK5", "id": "1CkdKTiwqYZGwOdAgpKaK5", "images": [{ "height": 640, "url": "https://i.scdn.co/image/d5ab72b534a98d8fcbb6dc8f338df84e0f776a77", "width": 640 }, { "height": 300, "url": "https://i.scdn.co/image/94bc96d3e2bc6f6e459c477a324c3082f3ba56e3", "width": 300 }, { "height": 64, "url": "https://i.scdn.co/image/077e57cb4f2fc90fca0669330f5552dbc7741d43", "width": 64 }], "name": "Faseleh", "type": "album", "uri": "spotify:album:1CkdKTiwqYZGwOdAgpKaK5" }, { "album_type": "album", "artists": [{ "external_urls": { "spotify": "https://open.spotify.com/artist/5qHYfvRJiNYAT7GB1uLcHl" }, "href": "https://api.spotify.com/v1/artists/5qHYfvRJiNYAT7GB1uLcHl", "id": "5qHYfvRJiNYAT7GB1uLcHl", "name": "Bijan Arya", "type": "artist", "uri": "spotify:artist:5qHYfvRJiNYAT7GB1uLcHl" }], "available_markets": ["AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TR", "TW", "US", "UY"], "external_urls": { "spotify": "https://open.spotify.com/album/4GwISU3kUTc5s6mof1OggW" }, "href": "https://api.spotify.com/v1/albums/4GwISU3kUTc5s6mof1OggW", "id": "4GwISU3kUTc5s6mof1OggW", "images": [{ "height": 600, "url": "https://i.scdn.co/image/8459dc69f1f785df8f57c6a1a9bda3a1d2edf7ae", "width": 600 }, { "height": 300, "url": "https://i.scdn.co/image/b7d8eb3e7ad95f6aec30097e22ede339cd5bb2b0", "width": 300 }, { "height": 64, "url": "https://i.scdn.co/image/a695735be929f8df350154ad9a6c9d1a71d7008e", "width": 64 }], "name": "Faseleh", "type": "album", "uri": "spotify:album:4GwISU3kUTc5s6mof1OggW" }, { "album_type": "single", "artists": [{ "external_urls": { "spotify": "https://open.spotify.com/artist/1InaenmbomenfTJoZo2GaW" }, "href": "https://api.spotify.com/v1/artists/1InaenmbomenfTJoZo2GaW", "id": "1InaenmbomenfTJoZo2GaW", "name": "Sepideh", "type": "artist", "uri": "spotify:artist:1InaenmbomenfTJoZo2GaW" }], "available_markets": ["AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TR", "TW", "US", "UY"], "external_urls": { "spotify": "https://open.spotify.com/album/5TYhogbybHXpsSekiOUqmq" }, "href": "https://api.spotify.com/v1/albums/5TYhogbybHXpsSekiOUqmq", "id": "5TYhogbybHXpsSekiOUqmq", "images": [{ "height": 640, "url": "https://i.scdn.co/image/e761090ee01759a98956946384790cd8f9b54307", "width": 640 }, { "height": 300, "url": "https://i.scdn.co/image/b443735076d65c3f5f743cacbc8f19fd5aeeac5d", "width": 300 }, { "height": 64, "url": "https://i.scdn.co/image/c17f753eb113a5389e70a82c4d43697ca7d4e6cb", "width": 64 }], "name": "Faseleh", "type": "album", "uri": "spotify:album:5TYhogbybHXpsSekiOUqmq" }, { "album_type": "single", "artists": [{ "external_urls": { "spotify": "https://open.spotify.com/artist/38B7gYv7O8vS6KoYyT2Nnx" }, "href": "https://api.spotify.com/v1/artists/38B7gYv7O8vS6KoYyT2Nnx", "id": "38B7gYv7O8vS6KoYyT2Nnx", "name": "Shahram Behrad", "type": "artist", "uri": "spotify:artist:38B7gYv7O8vS6KoYyT2Nnx" }], "available_markets": ["AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TR", "TW", "US", "UY"], "external_urls": { "spotify": "https://open.spotify.com/album/5TD4DPtl2oxJGfErvW6iUM" }, "href": "https://api.spotify.com/v1/albums/5TD4DPtl2oxJGfErvW6iUM", "id": "5TD4DPtl2oxJGfErvW6iUM", "images": [{ "height": 640, "url": "https://i.scdn.co/image/194385c1120e99a5eb2d0c30d1833c7a54a20cb7", "width": 640 }, { "height": 300, "url": "https://i.scdn.co/image/e5f18ebab68d16f882c0d0193e447539526ac0af", "width": 300 }, { "height": 64, "url": "https://i.scdn.co/image/552ccbd587c04b4706b3ca7db2b8fe7466d9b3a6", "width": 64 }], "name": "Faseleh - Single", "type": "album", "uri": "spotify:album:5TD4DPtl2oxJGfErvW6iUM" }], "limit": 4, "next": null, "offset": 0, "previous": null, "total": 4 }, "artists": { "href": "https://api.spotify.com/v1/search?query=faseleh&type=artist&offset=0&limit=4", "items": [{ "external_urls": { "spotify": "https://open.spotify.com/artist/3CwTq4dG7ncJRRiLfzQ78k" }, "followers": { "href": null, "total": 0 }, "genres": [], "href": "https://api.spotify.com/v1/artists/3CwTq4dG7ncJRRiLfzQ78k", "id": "3CwTq4dG7ncJRRiLfzQ78k", "images": [], "name": "Faseleh", "popularity": 0, "type": "artist", "uri": "spotify:artist:3CwTq4dG7ncJRRiLfzQ78k" }], "limit": 4, "next": null, "offset": 0, "previous": null, "total": 1 } }, "status": 200, "config": { "method": "GET", "transformRequest": [null], "transformResponse": [null], "jsonpCallbackParam": "callback", "url": "https://api.spotify.com/v1/search?type=artist,album&q=faseleh&offset=0&limit=4", "headers": { "Accept": "application/json, text/plain, */*" } }, "statusText": "OK" });
                    }

                    return {
                        getArtists: getArtists,
                        getAlbums: getAlbums,
                        getAlbumAndArtists: getAlbumAndArtists
                    };
                }
            ]);
        });
    });

    beforeEach(inject(function(_$controller_, spotifyService, $rootScope) {
        rootScope = $rootScope;
        mockDataSvc = spotifyService;
        spyOn(mockDataSvc, 'getArtists').and.callThrough();
        spyOn(mockDataSvc, 'getAlbums').and.callThrough();
        spyOn(mockDataSvc, 'getAlbumAndArtists').and.callThrough();

        // The injector unwraps the underscores (_) from around the parameter names when matching
        $controller = _$controller_;
        //$controller = $controller('SearchController', { spotifyService: mockDataSvc });
    }));

    it('should be defined', function() {
        expect($controller).toBeDefined();
    });

    describe('page init', function() {
        it('should call services if sessioStorage has data', function() {
            sessionStorage.setItem("searchQuery", 'test');
            var controller = $controller('SearchController', { spotifyService: mockDataSvc });

            expect(mockDataSvc.getArtists).toHaveBeenCalled();
            expect(mockDataSvc.getAlbums).toHaveBeenCalled();
        });
    });

    describe('search', function() {
        var controller;
        beforeEach(function() {
            controller = $controller('SearchController', { spotifyService: mockDataSvc });
        });
        it('should reset page settings', function() {
            controller.albums = ['test'];
            controller.artists = ['test'];
            controller.loadedAlbumsCount = 10;
            controller.loadedArtistsCount = 10;
            controller.totalAlbums = controller.itemsToLoadCount + 10;
            controller.totalArtists = controller.itemsToLoadCount + 10;

            controller.search();

            expect(controller.albums.length).toBe(0);
            expect(controller.artists.length).toBe(0);
            expect(controller.loadedAlbumsCount).toBe(0);
            expect(controller.loadedArtistsCount).toBe(0);
            expect(controller.totalAlbums).toBe(controller.itemsToLoadCount);
            expect(controller.totalArtists).toBe(controller.itemsToLoadCount);
        });
        it('should call services', function() {
            controller.search();

            rootScope.$digest();

            expect(mockDataSvc.getArtists).toHaveBeenCalled();
            expect(mockDataSvc.getAlbums).toHaveBeenCalled();
        });
        it('should set sessionStorage', function() {
            expect(sessionStorage.getItem("searchQuery")).toBe(controller.searchQuery);
        });
    });
    describe('getAlbums', function () {
        it('call getAlbums from spotifyService', function () {
            var controller = $controller('SearchController', { spotifyService: mockDataSvc });

            controller.loadedAlbumsCount = 10;
            controller.itemsToLoadCount = 20;
            controller.searchQuery = 'test';
            controller.albums = [];

            controller.getAlbums();
            expect(controller.loadingAlbums).toBeTruthy();
            rootScope.$digest();
            expect(controller.loadingAlbums).not.toBeTruthy();
            expect(controller.albums.length).toBeGreaterThan(0);
            expect(controller.albums[0].name).toBeDefined();
            expect(controller.albums[0].image).toBeDefined();
            expect(controller.totalAlbums).toBe(4);
            expect(mockDataSvc.getAlbums).toHaveBeenCalledWith('test', 10, 20);
        });
    });
    describe('getArtists', function () {
        it('call getArtists from spotifyService', function () {
            var controller = $controller('SearchController', { spotifyService: mockDataSvc });

            controller.loadedArtistsCount = 10;
            controller.itemsToLoadCount = 20;
            controller.searchQuery = 'test';
            controller.artists = [];

            controller.getArtists();
            expect(controller.loadingArtists).toBeTruthy();
            rootScope.$digest();
            expect(controller.loadingArtists).not.toBeTruthy();
            expect(controller.artists.length).toBeGreaterThan(0);
            expect(controller.artists[0].name).toBeDefined();
            expect(controller.artists[0].image).toBeDefined();
            expect(controller.totalArtists).toBe(10);
            expect(mockDataSvc.getArtists).toHaveBeenCalledWith('test', 10, 20);
        });
    });
    describe('getForTypeahead', function () {
        it('call getAlbumAndArtists from spotifyService', function () {
            var controller = $controller('SearchController', { spotifyService: mockDataSvc });

           controller.getForTypeahead();
            rootScope.$digest();
            
            expect(mockDataSvc.getAlbumAndArtists).toHaveBeenCalled();
        });
    });
});