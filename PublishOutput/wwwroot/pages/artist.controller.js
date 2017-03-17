(function () {
    'use strict';

    angular.module('app')
        .controller('ArtistController', ArtistController);

    ArtistController.$inject = ['spotifyService', '$routeParams'];

    function ArtistController(spotifyService, $routeParams) {
        var vm = this;
        
        vm.loadedAlbumsCount = 0;
        vm.itemsToLoadCount = 30;
        vm.albums = [];
        vm.totalAlbums = vm.itemsToLoadCount;
        vm.loadingAlbums = false;
        vm.getAlbums = getAlbums;

        activate();

        function activate() { getAlbums(); }

        function getAlbums() {
            vm.loadingAlbums = true;
            spotifyService.getAlbumsofArtist($routeParams.id, vm.loadedAlbumsCount, vm.itemsToLoadCount).then(
                function success(data) {
                    vm.loadedAlbumsCount += data.data.items.length;
                    vm.albums = vm.albums.concat(_.map(data.data.items,
                        function (item) {
                            return { "name": item.name, "image": item.images[0].url }
                        }));
                    vm.totalAlbums = data.data.total;
                    vm.loadingAlbums = false;
                }, function error(message) { vm.loadingAlbums = false; });
        }

        
    }
})();
