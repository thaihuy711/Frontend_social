
var todoApp = angular.module('todoApp');

todoApp.config(function ($stateProvider) {
    var mainState = {
        name: 'main',
        url: '',
        templateUrl: '../list/list.html',
        controller: 'MainController',
        controllerAs: '$ctrl',
        reloadOnSearch: false
    };

    $stateProvider.state(mainState);

});