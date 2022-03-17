const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors('*'));
app.use(express.json());

const APP_PORT = 3333

const books = [
  {
    author: 'Thiago Nigro',
    book: 'Do mil ao milhão',
  },
  {
    author: 'J.K Rowling',
    book: 'Harry POtter e a pedra filosofal',
  },
  {
    author: 'R.J Palacio',
    book: 'Extraordinário',
  },
  {
    author: 'John Green',
    book: 'Cidade de papel',
  },
  {
    author: 'John Green',
    book: 'A culpa é das estrelas',
  },
];

const MESSAGE_ERROR = {
  message: 'Books not found',
}

app.get('/', (req, res) => {
  return res.status(200).send({message:'Olá mundo da APIs https v2'});
})

app.get('/books', (req, res) => {
  const path = req.path;
  if (path !== '/books') return res.status(404).json(MESSAGE_ERROR);
  return res.status(200).json(books);
})




app.listen(APP_PORT, () => console.log(`esta na porta ${APP_PORT}`))