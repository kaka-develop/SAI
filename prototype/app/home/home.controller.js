(function () {
    'use strict';

    angular
        .module('saiApp')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['$scope'];

    function HomeController($scope) {
        var vm = this;
    }
})();
