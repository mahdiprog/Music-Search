(function () {
    'use strict';

    angular.module('app')
        .controller('SearchController', SearchController);

    SearchController.$inject = ['spotifyService', 'toastr', 'constantsService'];

    function SearchController(spotifyService, toastr, constantsService) {
        var vm = this;
        
        vm.search = search;
        vm.loadedAlbumsCount = 0;
        vm.loadedArtistsCount = 0;
        vm.itemsToLoadCount = 30;
        vm.searchQuery = '';
        vm.albums = [];
        vm.artists = [];
        vm.totalAlbums = vm.itemsToLoadCount;
        vm.totalArtists = vm.itemsToLoadCount;
        vm.loadingAlbums = false;
        vm.loadingArtists = false;
        vm.getAlbums = getAlbums;
        vm.getArtists = getArtists;

        activate();

        function activate() {
            if (sessionStorage.getItem("searchQuery")) {
                vm.searchQuery = sessionStorage.getItem("searchQuery");
                vm.search();
            }
        }

        function getAlbums() {
            vm.loadingAlbums = true;
            spotifyService.getAlbums(vm.searchQuery, vm.loadedAlbumsCount, vm.itemsToLoadCount).then(
                function success(data) {
                    vm.loadedAlbumsCount += data.data.albums.items.length;

                    vm.albums = vm.albums.concat(_.map(data.data.albums.items,
                        function (item) {
                            return { "name": item.name, "image": item.images.length > 1 ?item.images[0].url:'', "artist": item.artists[0].name, "artistId":item.artists[0].id }
                        }));
                    vm.totalAlbums = data.data.albums.total;
                    vm.loadingAlbums = false;
                }, function error(message) { vm.loadingArtists = false; toastr.error(constantsService.generalErrorMessage) });
        }

        function getArtists() {
            vm.loadingArtists = true;
            spotifyService.getArtists(vm.searchQuery, vm.loadedArtistsCount, vm.itemsToLoadCount).then(
                function success(data) {
                    vm.loadedArtistsCount += data.data.artists.items.length;

                    vm.artists = vm.artists.concat(_.map(data.data.artists.items,
                         function (item) {
                             return {"id":item.id, "name": item.name, "image": item.images.length > 1 ? item.images[0].url : '', "popularity": item.popularity }
                         }));
                    vm.totalArtists = data.data.artists.total;
                    vm.loadingArtists = false;
                }, function error(message) { vm.loadingArtists = false; toastr.error(constantsService.generalErrorMessage) });
        }

        function search() {
            resetPage();
            getAlbums();
            getArtists();
            sessionStorage.setItem("searchQuery",vm.searchQuery);
        }

        function resetPage() {
            vm.albums = [];
            vm.artists = [];
            vm.loadedAlbumsCount = 0;
            vm.loadedArtistsCount = 0;
            vm.totalAlbums = vm.itemsToLoadCount;
            vm.totalArtists = vm.itemsToLoadCount;
        }

        vm.getForTypeahead = function (query) {
            return spotifyService.getAlbumAndArtists(query, 0, 4).then(
               function success(data) {
                   var items= _.map(data.data.artists.items,
                        function (item) {
                            return { "name": item.name, "image": item.images.length > 1 ? item.images[0].url : '',type:"artist" }
                        });
                   items = items.concat(_.map(data.data.albums.items,
                       function(item) {
                           return { "name": item.name, "image": item.images.length > 1 ? item.images[0].url : '', type: "album" }
                       }));
                   return items;

               }, function error(message) { vm.loadingArtists = false; toastr.error(constantsService.generalErrorMessage) });
        }
    }
})();
