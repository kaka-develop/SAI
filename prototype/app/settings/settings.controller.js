(function () {
    'use strict';

    angular
        .module('saiApp')
        .controller('SettingsController', SettingsController);

    SettingsController.$inject = ['$scope'];

    function SettingsController($scope) {
        var vm = this;

        vm.volume = 5;
    }
})();