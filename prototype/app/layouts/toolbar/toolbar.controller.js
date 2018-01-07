(function () {
    'use strict';

    angular
        .module('saiApp')
        .controller('ToolbarController', ToolbarController);

    ToolbarController.$inject = ['$scope', 'ToolbarService'];

    function ToolbarController($scope, ToolbarService) {
        var vm = this;

        vm.score = ToolbarService.getScore();

        ToolbarService.subscribe($scope, function somethingChanged() {
            vm.score = ToolbarService.getScore();
        });
    }

})();