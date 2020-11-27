const express = require("express");
const router = express.Router();
const pessoaSchema = require("../controllers/PessoaController.js");

router.post("/pessoa/cadastrar", pessoaSchema.cadastrar)
router.get("/pessoa/buscar/:cpf", pessoaSchema.buscar) // falho
router.get("/pessoa/buscar/", pessoaSchema.buscar)
router.get("/pessoa/listar", pessoaSchema.listar)
router.post("/pessoa/deletar", pessoaSchema.deletar)
router.post("/pessoa/atualizar", pessoaSchema.atualizar)

module.exports = router;