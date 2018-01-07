(function () {
    'use strict';

    angular
        .module('saiApp')
        .controller('AboutController', AboutController);

    AboutController.$inject = ['$scope'];

    function AboutController($scope) {
        var vm = this;
    }
})();
