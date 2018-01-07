(function () {
    'use strict';

    angular
        .module('saiApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider.state('settings', {
            parent: 'app',
            url: '/settings',
            data: {
                authorities: []
            },
            views: {
                'content@': {
                    templateUrl: 'app/settings/settings.html',
                    controller: 'SettingsController',
                    controllerAs: 'vm'
                }
            }
        });
    }
})();