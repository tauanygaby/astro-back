const Checklist = require("../models/Checklist");

module.exports = {
  async cadastrar(req, res) {
    try {
      const {texto, descricao, data} = req.body;

       const checklist = await Checklist.create({ texto, descricao, data });

      res.status(200).json({checklist});
    } catch (err) {
      res.status(400).json({err});
    }
    },

      async listaChecklist(req, res) {
        try {
            const checklist = await Checklist.findAll();

            if (!checklist) {
                res.status(401).json({ message: "Não existem tarefa cadastrada" });
            }

            res.status(200).json({ checklist });
        } catch (err) {
          console.log(err);
            res.status(400).json({ err });
        }
    },

    async deleteCheck(req, res) {
      try {
          const { id } = req.params;
          await Checklist.findOne({ where: { id } });
          
          await Checklist.destroy({ where: { id } });
          res.status(200).json({ ok: true });
          
      } catch (err) {
          res.status(400).json({ err });
      }
  },

  async editarCheck(req, res) {
    try {
        const { id } = req.params;
        const { texto, descricao, data} = req.body;

        const checklist = await Checklist.update({ texto, descricao, data }, { where: { id } });
        res.status(200).json({ checklist });
      
    } catch (err) {
        res.status(400).json({ err });
    }
},

async recupereCheck(req, res) {
  try {
      const { id } = req.params;
      const checklist = await Checklist.findOne({ where: { id } });

      res.status(200).json({ checklist });
  } catch (err) {
      res.status(400).json({ err });
  }
},

};
