const Diario = require("../models/Diario");

module.exports = {
  async cadastrarDiario(req, res) {
    try {
      const {titulocapa, subtitulocapa, imagemcapa, instituicaocapa, tituloregis, dataregis, registo, imagemregis, integrantesregis  } = req.body;

       const diarios = await Diario.create({ titulocapa, subtitulocapa, imagemcapa, instituicaocapa, tituloregis, dataregis, registo, imagemregis, integrantesregis });

      res.status(200).json({diarios});
    } catch (err) {
      res.status(400).json({err});
      console.log();
    }
    },

      async listaDiario(req, res) {
        try {
            const diarios = await Diario.findAll();

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
          await Diario.findOne({ where: { id } });
          
          await Diario.destroy({ where: { id } });
          res.status(200).json({ ok: true });
          
      } catch (err) {
          res.status(400).json({ err });
      }
  },

  async editarDiario(req, res) {
    try {
        const { id } = req.params;
        const { tituloCapa, subtituloCapa, integrantesCapa, instituicaoCapa} = req.body;

        const diarios = await Diario.update({ tituloCapa, subtituloCapa, integrantesCapa, instituicaoCapa }, { where: { id } });
        res.status(200).json({ diarios });
      
    } catch (err) {
        res.status(400).json({ err });
    }
},

async recupereDiario(req, res) {
  try {
      const { id } = req.params;
      const diarios = await Diario.findOne({ where: { id } });

      res.status(200).json({ diarios });
  } catch (err) {
      res.status(400).json({ err });
  }
},

};
