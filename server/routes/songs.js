const express = require('express');
const router = express.Router();

const db = require('../db/knex.js');
const SONGS_TABLE = 'songs'; // this can be moved to a proper DB file

router.get('/', async function(req, res) {
  const { page = 0, pageSize = 10 } = req.query;
  const offset = page * pageSize;

  const metadata = await db
    .select()
    .from(SONGS_TABLE)
    .offset(offset)
    .limit(pageSize);

  res.send(metadata);
});

// TODO add the other CRUD operations here

module.exports = router;
