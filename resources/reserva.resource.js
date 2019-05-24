const mongoose = require('mongoose');
const reservaModel = mongoose.model('reservas');

module.exports = function (app) {
    app.get('/reservas', function (req, resp) {
        reservaModel.find({}, ['emissao', 'dtreserva', 'apartamento', 'morador', 'itens'], {sort: {emissao: 1}})
            .populate('morador', 'documento apartamento nome email')
            .then(
                function (data) {
                    resp.status(200).send(data);
                }, 
                function (err) {
                    resp.status(500).send(err);
                }
            );
    });
    app.post('/reservas', function (req, resp) {
        reservaModel.create(req.body)
            .then(
                function (data) {
                    resp.status(201).send(data);
                },
                function (err) {
                    resp.status(500).send(err);
                }
            );
    });
    app.get('/reservas/:id', function (req, resp) {
        reservaModel.findById(req.params.id)
            .populate('morador')
            .populate('apartamento')
            .populate('itens.servico')
            .then(
                function (data) {
                    if (!data) {
                        resp.status(404).send();
                    } else {
                        resp.status(200).send(data);
                    }
                },
                function (err) {
                    resp.status(500).send(err);
                }
            );
    });
    app.put('/reservas/:id', function (req, resp) {
        reservaModel.findOneAndUpdate({ '_id': req.params.id }, req.body)
            .then(
                function (data) {
                    if (!data) {
                        resp.status(404).send();
                    } else {
                        resp.status(200).send(data);
                    }
                },
                function (err) {
                    resp.status(500).send(err);
                }
            );
    });
    app.delete('/reservas/:id', function (req, resp) {
        reservaModel.deleteOne({ '_id': req.params.id })
            .then(
                function () {
                    resp.status(204).send();
                },
                function (err) {
                    resp.status(500).send(err);
                }
            );
    });
}