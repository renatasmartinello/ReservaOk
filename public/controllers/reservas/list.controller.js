angular.module('app')
    .controller('ReservaListController', ReservaListController);

ReservaListController.$inject = ['ReservaService'];

function ReservaListController(ReservaService){
    var vm = this;
    vm.reservas = [];

    function _load() {
        ReservaService.findAll()
            .then(function (dados) {
                vm.reservas = dados;
            });
    }
    _load();

    vm.excluir = function (id) {
        if (confirm('Deseja realmente excluir?')) {
            ReservaService.remove(id)
                .then(function() {
                    _load();
                });
        }
    }
}