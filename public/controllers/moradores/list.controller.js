angular.module('app')
    .controller('MoradorListController', MoradorListController);

MoradorListController.$inject = ['MoradorService'];

function MoradorListController(MoradorService){
    var vm = this;
    vm.moradores = [];

    function _load() {
        MoradorService.findAll()
            .then(function (dados) {
                vm.moradores = dados;
            });
    }
    _load();

    vm.excluir = function (id) {
        if (confirm('Deseja realmente excluir?')) {
            MoradorService.remove(id)
                .then(function() {
                    _load();
                });
        }
    }
}