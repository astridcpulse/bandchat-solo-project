const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
  // GET route code here
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
  const sqlText = `INSERT INTO "project_data" ("project_name") VALUES $1;`
  const sqlParams = req.body;
  pool.query(sqlText, sqlParams)
      .then((dbRes) => {
        console.log('success in postProject');
        res.sendStatus(200);
      })
      .catch((err) => {
        console.error('error in post', err);
        res.sendStatus(500);
      })
});

module.exports = router;
