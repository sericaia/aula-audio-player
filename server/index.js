const express = require('express');
const app = express();

const db = require('./db/knex.js');

app.use(express.static('public'));

app.get('/songs', async function (req, res) {
  const metadata = await db
    .select()
    .from('songs')

  res.send(metadata)
});

app.use('/songs', express.static('public', {
  extensions: ['wav'],
}));

app.listen(process.env.PORT || 8080);