const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors()); // permite acesso de outros domínios

app.get('/api/alunos', (req, res) => {
  res.json([
    { id: 1, description: 'Andar de Bicicleta' },
    { id: 2, description: 'Fazer atividade PWeb2' },
    { id: 3, description: 'Teste' },
    { id: 4, description: 'Mais um teste' }
  ]);
});

app.listen(3000, () => console.log('Backend rodando na porta 3000'));
