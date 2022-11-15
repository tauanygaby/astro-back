const Aluno = require("../models/Aluno");

module.exports = {
  async cadastro(req, res) {
    try {
      const {nome, nickname, email, senha, instituicao, idequipe} = req.body;

        const aluno = await Aluno.findOne({ where: { email } });
        
        if (aluno) {
            res.status(401).json({ message: "Já existe um usuário com este email" });
        } else {
           const aluno = await Aluno.create({ nome, nickname, email, senha, instituicao, idequipe });

            res.status(200).json({ aluno });
        }
        
    } catch (err) {
      res.status(400).json({err});
    }
    },
    async atualizacao(req, res) {
        try {
            const { email } = req.params;
            const { nome, nickname, senha, instituicao, fotouser} = req.body;

            const aluno = await Aluno.findOne({ where: { email } });

            if (!aluno) {
                res.status(401).json({ message: "Não existe um usuário" });
            } else {
                const aluno = await Aluno.update({ nome, nickname, senha, instituicao, fotouser}, { where: { email } });

                res.status(200).json({ aluno });
            }
        } catch (err) {
            res.status(400).json({ err });
        }
    },
    async recupereUm(req, res) {
        try {
            const { email } = req.params;
            const aluno = await Aluno.findOne({ where: { email } });

            if (!aluno) {
                res.status(401).json({ message: "Não existe um usuário" });
            }

            res.status(200).json({ aluno });
        } catch (err) {
            res.status(400).json({ err });
        }
    },
    async listaAlunos(req, res) {
        try {
            const alunos = await Aluno.findAll();

            if (!alunos) {
                res.status(401).json({ message: "Não existem usuários cadastrados" });
            }

            res.status(200).json({ alunos });
        } catch (err) {
            res.status(400).json({ err });
        }
    },

    async delete(req, res) {
        try {
            const { id } = req.params;
            const aluno = await Aluno.findOne({ where: { id } });
            if (!aluno) {
                res.status(401).json({ message: "Usuário não encontrado"});
            } else {
                await Aluno.destroy({ where: { id } });
                res.status(200).json({ ok: true });
            }
        } catch (err) {
            res.status(400).json({ err });
        }
    }
};
