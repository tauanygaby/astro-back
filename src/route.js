const {Router} = require("express");
const AlunoController = require('./controller/AlunoController')
const ChecklistController = require('./controller/ChecklistController');
const DiarioDeBordoController = require("./controller/DiarioDeBordoController");
const EditorController = require("./controller/EditorController");
const router = Router();

router.post('/cadastro', AlunoController.cadastro);
router.put('/atualizar/:email', AlunoController.atualizacao);
router.get('/lista-alunos', AlunoController.listaAlunos);
router.delete('/delete/:id', AlunoController.delete);
router.get('/aluno/:email', AlunoController.recupereUm);

router.get('/checklist-all', ChecklistController.listaChecklist);
router.post('/checklist', ChecklistController.cadastrar);
router.delete('/deleteCheck/:id', ChecklistController.deleteCheck);
router.put('/editarCheck/:id', ChecklistController.editarCheck);
router.get('/getCheck/:id', ChecklistController.recupereCheck);
router.post('/editor', EditorController.cadastrarTexto);
router.get('/exibir-texto', EditorController.listarTextoEditor);

router.get('/listaDiario', DiarioDeBordoController.listaDiario);
router.post('/cadastrarDiario', DiarioDeBordoController.cadastrarDiario);
router.put('/editarDiario/:id', DiarioDeBordoController.editarDiario);
router.delete('/deleteDiario/:id', DiarioDeBordoController.deleteDiario);

module.exports = router;
