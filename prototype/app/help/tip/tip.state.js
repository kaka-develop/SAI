(function () {
    'use strict';

    angular
        .module('saiApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider.state('tip', {
            parent: 'help',
            url: '/tip',
            data: {
                authorities: []
            },
            views: {
                'content@': {
                    templateUrl: 'app/help/tip/tip.html',
                    controller: 'TipController',
                    controllerAs: 'vm'
                }
            }
        });
    }
})();