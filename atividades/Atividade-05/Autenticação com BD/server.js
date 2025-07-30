const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Conexão com banco de dados
const db = mysql.createConnection({
  host: 'localhost',
  user: 'seu_usuario',
  password: 'sua_senha',
  database: 'sistema_login'
});

db.connect((err) => {
  if (err) throw err;
  console.log('Conectado ao MySQL');
});

// Rota de login
app.post('/login', (req, res) => {
  const { email, senha } = req.body;

  const sql = 'SELECT * FROM usuarios WHERE email = ? AND senha = ?';
  db.query(sql, [email, senha], (err, results) => {
    if (err) return res.status(500).send('Erro no servidor');
    if (results.length > 0) {
      const user = results[0];
      if (user.nivel_acesso === 'admin') {
        res.send('Login bem-sucedido! Bem-vindo, administrador.');
      } else {
        res.send('Login bem-sucedido! Bem-vindo, usuário.');
      }
    } else {
      res.status(401).send('Credenciais inválidas');
    }
  });
});

app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});
