(function() {
    'use strict';

    angular
        .module('saiApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider.state('help', {
            parent: 'app',
            url: '/help',
            data: {
                authorities: []
            },
            views: {
                'content@': {
                    templateUrl: 'app/help/help.html',
                    controller: 'HelpController',
                    controllerAs: 'vm'
                }
            }
        });
    }
})();
