const DiarioDeBordo = require("../models/DiarioDeBordo");

module.exports = {
  async cadastrarDiario(req, res) {
    try {
      const {tituloCapa, subtituloCapa, imagemCapa, integrantesCapa, instituicaoCapa} = req.body;

       const diarios = await DiarioDeBordo.create({ tituloCapa, subtituloCapa, imagemCapa, integrantesCapa, instituicaoCapa });

      res.status(200).json({diarios});
    } catch (err) {
      res.status(400).json({err});
    }
    },

      async listaDiario(req, res) {
        try {
            const diarios = await DiarioDeBordo.findAll();

            if (!diarios) {
                res.status(401).json({ message: "Não existem registros cadastrada" });
            }

            res.status(200).json({ diarios });
        } catch (err) {
          console.log(err);
            res.status(400).json({ err });
        }
    },

    async deleteDiario(req, res) {
      try {
          const { id } = req.params;
          await DiarioDeBordo.findOne({ where: { id } });
          
          await DiarioDeBordo.destroy({ where: { id } });
          res.status(200).json({ ok: true });
          
      } catch (err) {
          res.status(400).json({ err });
      }
  },

  async editarDiario(req, res) {
    try {
        const { id } = req.params;
        const { tituloCapa, subtituloCapa, imagemCapa, integrantesCapa, instituicaoCapa} = req.body;

        const diarios = await DiarioDeBordo.update({ tituloCapa, subtituloCapa, imagemCapa, integrantesCapa, instituicaoCapa }, { where: { id } });
        res.status(200).json({ diarios });
      
    } catch (err) {
        res.status(400).json({ err });
    }
},

async recupereDiario(req, res) {
  try {
      const { id } = req.params;
      const diarios = await DiarioDeBordo.findOne({ where: { id } });

      res.status(200).json({ diarios });
  } catch (err) {
      res.status(400).json({ err });
  }
},

};
