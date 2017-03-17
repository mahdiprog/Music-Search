
angular.module('app').config(function (toastrConfig) {
    angular.extend(toastrConfig, {
        positionClass: 'toast-bottom-left',
        timeOut: 8000,
    });
});