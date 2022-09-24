const {Router} = require("express");
const AlunoController = require('./controller/AlunoController')
const router = Router();

router.post('/cadastro', AlunoController.cadastro);
router.put('/atualizar/:id', AlunoController.atualizacao);
router.get('/lista-alunos', AlunoController.listaAlunos);
router.delete('/delete/:id', AlunoController.delete);

module.exports = router;
