const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// Conexão com MySQL
const db = mysql.createConnection({
    host: 'localhost',
    user: 'seu_usuario',
    password: 'sua_senha',
    database: 'nome_do_banco'
});

db.connect(err => {
    if (err) throw err;
    console.log("Conectado ao MySQL!");
});

// Rota de login
app.post('/login', (req, res) => {
    const { email, senha } = req.body;

    const query = 'SELECT nivel_acesso FROM usuarios WHERE email = ? AND senha = ?';
    db.query(query, [email, senha], (err, results) => {
        if (err) return res.status(500).send("Erro no servidor.");
        if (results.length === 0) {
            return res.status(401).send("Credenciais inválidas.");
        }

        const nivel = results[0].nivel_acesso;
        if (nivel === 'admin') {
            res.send("Bem-vindo, administrador!");
        } else {
            res.send("Bem-vindo, usuário (acesso limitado).");
        }
    });
});

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});
