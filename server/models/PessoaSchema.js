const mongoose = require("mongoose");

const PessoaSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: [true, "O campo nome não pode ser vazio"]
    },
    cpf: {
        type: String,
        required: [true, "O campo cpf não pode ser vazio"]
    },
    idade: {
        type: Number,
        required: [true, "O campo idade não pode ser vazio"],
        min: [0, "O campo idade não pode ser menor que zero."]
    },
    criadoEm: {
        type: Date, 
        default: Date.now
    },
});

module.exports = mongoose.model("Pessoa", PessoaSchema);