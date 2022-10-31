const Editor = require("../models/Editor");

module.exports = {
  async cadastrarTexto(req, res) {
    try {
      const {texto} = req.body;

       const editor = await Editor.create({ texto });

        res.status(200).json({ editor });
    
    } catch (err) {
      res.status(400).json({err});
    }
  },
  async listarTextoEditor(req, res) {
    try {
      const editor = await Editor.findAll();

      if (!editor) {
        res.status(401).json({message: "Não existem tarefas cadastradas"});
      }

      res.status(200).json({editor});
    } catch (err) {
      res.status(400).json({err});
    }
  },
};
