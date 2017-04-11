(function() {
    'use strict';

    angular
        .module('saiApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider.state('play', {
            parent: 'app',
            url: '/play',
            data: {
                authorities: []
            },
            views: {
                'content@': {
                    templateUrl: 'app/play/play.html',
                    controller: 'PlayController',
                    controllerAs: 'vm'
                },
                'quicktool@play': {
                    templateUrl: 'app/layouts/quicktool/quicktool.html',
                    controller: 'QuickToolController',
                    controllerAs: 'vm'
                }
            }
        });
    }
})();
