const Checklist = require("../models/Checklist");

module.exports = {
  async cadastrar(req, res) {
    try {
      const {texto} = req.body;

      const checklist = await Checklist.create({texto});

      res.status(200).json({checklist});
    } catch (err) {
      res.status(400).json({err});
    }
  },
  async listaChecklist(req, res) {
    try {
      const checklist = await Checklist.findAll();

      if (!checklist) {
        res.status(401).json({message: "Não existem tarefas cadastradas"});
      }

      res.status(200).json({checklist});
    } catch (err) {
      res.status(400).json({err});
    }
  },
};
