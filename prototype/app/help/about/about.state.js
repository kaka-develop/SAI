(function() {
    'use strict';

    angular
        .module('saiApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider.state('about', {
            parent: 'help',
            url: '/about',
            data: {
                authorities: []
            },
            views: {
                'content@': {
                    templateUrl: 'app/help/about/about.html',
                    controller: 'AboutController',
                    controllerAs: 'vm'
                }
            }
        });
    }
})();
