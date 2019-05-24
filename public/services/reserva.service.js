angular.module('app')
    .service('ReservaService', ReservaService);

ReservaService.$inject = ['$http']

function ReservaService ($http) {
    var URL = '/reservas';

    var service = this;

    service.findAll = function () {
        return $http.get(URL)
            .then(function(resp) {
                return resp.data;
            });
    }

    service.findOne = function (id) {
        return $http.get(URL + '/' + id)
            .then(function(resp) {
                return resp.data;
            });
    }

    service.update = function (id, reserva) {
        return $http.put(URL + '/' + id, reserva)
            .then(function(resp) {
                return resp.data;
            });
    }

    service.remove = function (id) {
        return $http.delete(URL + '/' + id);
    }

    service.insert = function (reserva) {
        return $http.post(URL, reserva)
            .then(function(resp) {
                return resp.data;
            });
    }

}