const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const _model = new Schema({
    documento: {
        type:String,
        required: true
    },
    apartamento: {
        type:String,
        required: true
    },
    nome: String,
    email: String,
    telefone: String
});

mongoose.model('moradores', _model);