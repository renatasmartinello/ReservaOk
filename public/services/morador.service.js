angular.module('app')
    .service('MoradorService', MoradorService);

    MoradorService.$inject = ['$http']

function MoradorService ($http) {
    var URL = '/moradores';

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

    service.update = function (id, morador) {
        return $http.put(URL + '/' + id, morador)
            .then(function(resp) {
                return resp.data;
            });
    }

    service.remove = function (id) {
        return $http.delete(URL + '/' + id);
    }

    service.insert = function (morador) {
        return $http.post(URL, morador)
            .then(function(resp) {
                return resp.data;
            });
    }

}