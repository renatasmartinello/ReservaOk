const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const _model = new Schema({
    emissao: {
        type: Date,
        default: Date.now
    },
    dtreserva: {
        required: true,
        type: String        
    },
    apartamento: {              
        type: Schema.Types.ObjectId,
        ref: 'moradores'
    },
    morador: {
        required: true,
        type: Schema.Types.ObjectId,
        ref: 'moradores'
    },
    itens: [{
        servico: {
            required: true,
            type: Schema.Types.ObjectId,
            ref: 'servicos'
        },
        preco: Number,
        quantidade: Number       
    }]
});

_model.virtual('total').get(function() {
    return this.itens ? this.itens.reduce((total, item) => total + (item.preco * item.quantidade), 0) : 0;
})

mongoose.model('reservas', _model);