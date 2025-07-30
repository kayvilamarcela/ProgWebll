var express = require('express');
var router = express.Router();
var axios = require('axios');
const FormData = require('form-data');
const qs = require('qs');
const { response } = require('express');


router.get('/', async function (req, res, next) {

  var lista = await axios.get('https://mauricio.inf.br/p6/api/list/');

  if (lista) {
    res.render('lista', {
      title: 'lista',
      lista: lista.data.veiculos
    })
  } else {
    res.render('lista', {
      title: 'lista'
    })
  }

})

router.get('/register', function (req, res, next) {

  res.render('register', {
    title: 'register'
  })
})

router.post('/register', async function (req, res, next) {
  try {
    var fd = new FormData();
    fd.append('placa', req.body.placa);
    fd.append('marca', req.body.marca);
    fd.append('modelo', req.body.modelo);
    fd.append('cor', req.body.cor);
    fd.append('ano_fabric', req.body.ano_fabric);

    const response = await axios.post('https://mauricio.inf.br/p6/api/add/', fd);

    console.log('Resposta da API externa:', response.data);

    res.redirect('/');
  } catch (err) {
    console.error('Erro no axios:');
    if (err.response) {
      console.error('Status:', err.response.status);
      console.error('Data:', err.response.data);
    } else if (err.request) {
      console.error('Request foi feito, mas sem resposta:', err.request);
    } else {
      console.error('Erro de configuração:', err.message);
    }
    res.status(500).send('Erro ao enviar dados para a API externa');
  }
});

router.post('/remove', async function (req, res, next) {
  try {
    var fd = new FormData();
    fd.append('placa', req.body.placa);

    const response = await axios.post('https://mauricio.inf.br/p6/api/remove/', fd);

    console.log('Resposta da API externa:', response.data);

    res.redirect('/');
  } catch (err) {
    console.error('Erro no axios:');
    if (err.response) {
      console.error('Status:', err.response.status);
      console.error('Data:', err.response.data);
    } else if (err.request) {
      console.error('Request foi feito, mas sem resposta:', err.request);
    } else {
      console.error('Erro de configuração:', err.message);
    }
    res.status(500).send('Erro ao enviar dados para a API externa');
  }
});

module.exports = router;
