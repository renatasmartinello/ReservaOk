angular.module('app')
    .controller('MoradorFormController', MoradorFormController);

    MoradorFormController.$inject = [
    'MoradorService', 
    '$stateParams', 
    '$state'
];

function MoradorFormController (MoradorService, $stateParams, $state){
    var vm = this;
    vm.morador = {};
    vm.titulo = 'Novo morador';

    if ($stateParams.id) {
        vm.titulo = 'Editando morador';
        MoradorService.findOne($stateParams.id)
            .then(function (data) {
                vm.morador = data;
            });
    }

    vm.save = function() {
        if ($stateParams.id) {
            MoradorService
                .update($stateParams.id, vm.morador)
                .then(function() {
                    $state.go('moradorList');
                });
        } else {
            MoradorService
                .insert(vm.morador)
                .then(function() {
                    $state.go('moradorList');
                });
        }
    }
}