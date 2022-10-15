const Checklist = require("../models/Checklist");

module.exports = {
  async cadastrar(req, res) {
    try {
      const {texto} = req.body;

       const checklist = await Checklist.create({ texto });

        res.status(200).json({ checklist });
    
    } catch (err) {
      res.status(400).json({err});
    }
    },
    async listar(req, res) {
      try {
        const {texto} = req.body;
  
         const checklist = await Checklist.create({ texto });
  
          res.status(200).json({ checklist });
      
      } catch (err) {
        res.status(400).json({err});
      }
      }
};
