const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
    rejectUnauthenticated,
  } = require('../modules/authentication-middleware');


router.delete('/:id', rejectUnauthenticated, (req, res) => {

    const sqlText = `UPDATE "part_data"
                    SET "notes" = NULL
                    WHERE "part_data".id = $1;`;

    pool.query(sqlText, [req.params.id])
        .then((dbRes) => {  
            res.sendStatus(200);
        })
        .catch((dbErr) => {
            console.error('error in DELETE note', dbErr)
            res.sendStatus(500);
        });
});

module.exports = router;
