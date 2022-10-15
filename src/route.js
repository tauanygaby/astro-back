const {Router} = require("express");
const AlunoController = require('./controller/AlunoController')
const ChecklistController = require('./controller/ChecklistController')
const router = Router();

router.post('/cadastro', AlunoController.cadastro);
router.put('/atualizar/:email', AlunoController.atualizacao);
router.get('/lista-alunos', AlunoController.listaAlunos);
router.delete('/delete/:id', AlunoController.delete);
router.get('/aluno/:email', AlunoController.recupereUm);

router.get('/checklist-all', ChecklistController.listar);
router.post('/checklist', ChecklistController.cadastrar);

module.exports = router;
