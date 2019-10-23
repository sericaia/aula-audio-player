const path = require('path');
const express = require('express');
const app = express();

const songs = require('./routes/songs');

const PORT = process.env.PORT || 8080;

app.use('/songs', songs);

app.use(
  '/songs',
  express.static(path.join(__dirname, 'public'), {
    extensions: ['wav']
  })
);

app.listen(PORT, () => {
  console.log('Server started on port', 8080);
});
