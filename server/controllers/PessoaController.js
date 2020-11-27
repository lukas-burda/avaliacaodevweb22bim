const pessoaSchema = require("../models/PessoaSchema.js");

class PessoaSchemaController {

    async cadastrar(req, res){
        var existe = await pessoaSchema.exists({"cpf" : req.body.cpf});
        console.log(existe)
        if (!existe) {
        res.status(201).json(await pessoaSchema.create(req.body));
        }
        else{
            res.status(500).json({"Message": "Pessoa já existe"});
        }
    }

    async buscar(req, res) {
        try {
            var result = await pessoaSchema.findOne(req.params.cpf);
            res.status(201).json(result);
        } catch (error) {
            res.status(500).json(error);
        }
    }
    

    async listar(req, res) {
        try {
            var result = await pessoaSchema.find({});
            res.status(201).json(result);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    async deletar(req, res) {
        try {
            var result = await pessoaSchema.findOneAndDelete(req.params.cpf);
            res.status(201).json(result);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    async atualizar(req, res) {
        try {
            var result = await pessoaSchema.updateOne(req.body);
            res.status(201).json(result);
        } catch (error) {
            res.status(500).json(error);
        }
    }
}

module.exports = new PessoaSchemaController;