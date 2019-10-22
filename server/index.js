const path = require('path');
const express = require('express');
const app = express();

const songs = require('./routes/songs');

app.use('/songs', songs);

app.use(
  '/songs',
  express.static(path.join(__dirname, 'public'), {
    extensions: ['wav']
  })
);

app.listen(process.env.PORT || 8080);
