(function () {
    'use strict';

    angular
        .module('saiApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];


    function stateConfig($stateProvider) {
        $stateProvider.state('app', {
            abstract: true,
            views: {
                'toolbar@': {
                    templateUrl: 'app/layouts/toolbar/toolbar.html',
                    controller: 'ToolbarController',
                    controllerAs: 'vm'
                }
            }
        });
    }
})();