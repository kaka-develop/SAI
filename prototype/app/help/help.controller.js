(function () {
    'use strict';

    angular
        .module('saiApp')
        .controller('HelpController', HelpController);

    HelpController.$inject = ['$scope'];

    function HelpController($scope) {
        var vm = this;
    }
})();
