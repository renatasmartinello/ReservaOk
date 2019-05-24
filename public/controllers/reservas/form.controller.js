angular.module('app')
    .controller('ReservaFormController', ReservaFormController);

    ReservaFormController.$inject = [
    'ReservaService', 
    'MoradorService',
    'ServicoService',
    '$stateParams', 
    '$state'
];

function ReservaFormController (ReservaService, MoradorService, ServicoService, $stateParams, $state){
    var vm = this;
    vm.reserva = {};
    vm.titulo = 'Nova reserva';

    vm.moradores = [];
    vm.servicos = [];

    MoradorService.findAll()
        .then(function (data) {
            vm.moradores = data;
        });
    ServicoService.findAll()
        .then(function (data) {
            vm.servicos = data;
        });

    if ($stateParams.id) {
        vm.titulo = 'Editando reserva';
        ReservaService.findOne($stateParams.id)
            .then(function (data) {
                vm.reserva = data;
            });
    }

    vm.save = function() {
        if ($stateParams.id) {
            ReservaService
                .update($stateParams.id, vm.reserva)
                .then(function() {
                    $state.go('reservaList');
                });
        } else {
            ReservaService
                .insert(vm.reserva)
                .then(function() {
                    $state.go('reservaList');
                });
        }
    }

    vm.addItem = function() {
        vm.reserva.itens = vm.reserva.itens || [];
        vm.itemSelecionado = {}
        vm.indexSelecionado = null;
    }

    vm.saveItem = function() {
        if (vm.indexSelecionado) {
            vm.reserva.itens[vm.indexSelecionado] = vm.itemSelecionado;
        } else {
            vm.reserva.itens.push(vm.itemSelecionado);
        }
        
    }
}