(function () {
    'use strict';
    angular
        .module('saiApp')
        .factory('ToolbarService', ToolbarService);

    ToolbarService.$inject = ['$rootScope'];

    function ToolbarService($rootScope) {
        var score = '00';

        var instance = {
            getScore: getScore,
            changeScore: changeScore,
            subscribe: subscribe,
            notify: notify
        };

        function getScore(){
            return score;
        }

        function changeScore(value){
            score = value;
            notify();
        }

        function subscribe(scope, callback) {
            var handler = $rootScope.$on('notifying-service-event', callback);
            scope.$on('$destroy', handler);
        }

        function notify() {
            $rootScope.$emit('notifying-service-event');
        }

        return instance;
    }

})();