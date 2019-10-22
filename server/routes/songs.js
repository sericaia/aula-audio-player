const express = require('express');
const router = express.Router();

const db = require('../db/knex.js');

router.get('/', async function(req, res) {
  const metadata = await db.select().from('songs');

  res.send(metadata);
});

// TODO add the other CRUD operations here

module.exports = router;
