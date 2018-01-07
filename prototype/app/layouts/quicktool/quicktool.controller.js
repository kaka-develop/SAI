(function () {
    'use strict';

    angular
        .module('saiApp')
        .controller('QuickToolController', QuickToolController);

    QuickToolController.$inject = ['$state','$mdDialog'];

    function QuickToolController($state,$mdDialog) {
        var vm = this;
        vm.showResult = showResult;

        function showResult() {
            var templateUrl = 'app/dialogs/result-dialog.html';
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