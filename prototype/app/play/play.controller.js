(function () {
    'use strict';

    angular
        .module('saiApp')
        .controller('PlayController', PlayController);

    PlayController.$inject = ['$scope', 'ToolbarService', '$mdDialog'];

    function PlayController($scope, ToolbarService, $mdDialog) {
        var vm = this;
        ToolbarService.changeScore('20');

        vm.showWrongAnswer = showWrongAnswer;

        function showWrongAnswer() {
            var templateUrl = 'app/dialogs/wrong-answer-dialog.html';
            showDialog(templateUrl);
        }


        function showDialog(templateUrl) {
            $mdDialog.show({
                templateUrl: templateUrl,
                targetEvent: null,
                clickOutsideToClose: true,
                fullscreen: false
            });
        }
    }
})();