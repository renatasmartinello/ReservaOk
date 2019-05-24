angular.module('app', [
    'ui.router'
]);

angular.module('app').config(ConfigMain);

ConfigMain.$inject = ['$stateProvider'];

function ConfigMain ($stateProvider) {
    $stateProvider
        .state({
            name: 'moradorList',
            url: '/moradores',
            templateUrl: '/partials/moradores/list.html',
            controller: 'MoradorListController',
            controllerAs: 'vm'
        })
        .state({
            name: 'moradorNovo',
            url: '/moradores/novo',
            templateUrl: '/partials/moradores/form.html',
            controller: 'MoradorFormController',
            controllerAs: 'vm'
        })
        .state({
            name: 'moradorEditar',
            url: '/moradores/:id',
            templateUrl: '/partials/moradores/form.html',
            controller: 'MoradorFormController',
            controllerAs: 'vm'
        })
        .state({
            name: 'servicoList',
            url: '/servicos',
            templateUrl: '/partials/servicos/list.html',
            controller: 'ServicoListController',
            controllerAs: 'vm'
        })
        .state({
            name: 'servicoNovo',
            url: '/servicos/novo',
            templateUrl: '/partials/servicos/form.html',
            controller: 'ServicoFormController',
            controllerAs: 'vm'
        })
        .state({
            name: 'servicoEditar',
            url: '/servicos/:id',
            templateUrl: '/partials/servicos/form.html',
            controller: 'ServicoFormController',
            controllerAs: 'vm'
        })
        .state({
            name: 'reservaList',
            url: '/reservass',
            templateUrl: '/partials/reservas/list.html',
            controller: 'ReservaListController',
            controllerAs: 'vm'
        })
        .state({
            name: 'reservaNovo',
            url: '/reservas/novo',
            templateUrl: '/partials/reservas/form.html',
            controller: 'ReservaFormController',
            controllerAs: 'vm'
        })
        .state({
            name: 'reservaEditar',
            url: '/reservas/:id',
            templateUrl: '/partials/reservas/form.html',
            controller: 'ReservaFormController',
            controllerAs: 'vm'
        });
}
