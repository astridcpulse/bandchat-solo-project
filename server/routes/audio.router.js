const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');
/**
 * GET route template
 */
router.get('/', (req, res) => {
  // GET route code here
});

/**
 * POST route template
 */
router.post('/', rejectUnauthenticated, (req, res) => {
  // POST route code here
  const sqlText = `INSERT INTO "part_data" ("sound_url") VALUES $1;`
  const sqlParams = req.body;
  pool.query(sqlText, sqlParams)
      .then((dbRes) => {
        console.log('success in postAudio');
        res.sendStatus(200);
      })
      .catch((err) => {
        console.error('error in post', err);
        res.sendStatus(500);
      })
});

module.exports = router;
