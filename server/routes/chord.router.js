const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
    rejectUnauthenticated,
  } = require('../modules/authentication-middleware');


router.delete('/:id', rejectUnauthenticated, (req, res) => {
    console.log('params for the part id ', req.params.id);

    const sqlText = `UPDATE "part_data"
                    SET "chord_value" = NULL,
                        "chord_text" = NULL,
                        "chord_mode" = NULL
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