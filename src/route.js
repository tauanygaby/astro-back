const {Router} = require("express");
const AlunoController = require('./controller/AlunoController')
const router = Router();

router.post('/cadastro', AlunoController.cadastro);
router.put('/atualizar/:email', AlunoController.atualizacao);
router.get('/lista-alunos', AlunoController.listaAlunos);
router.delete('/delete/:id', AlunoController.delete);
router.get('/aluno/:email', AlunoController.recupereUm);

module.exports = router;
