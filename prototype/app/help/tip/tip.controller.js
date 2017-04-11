(function () {
    'use strict';

    angular
        .module('saiApp')
        .controller('TipController', TipController);

    TipController.$inject = ['$scope'];

    function TipController($scope) {
        var vm = this;
    }
})();
