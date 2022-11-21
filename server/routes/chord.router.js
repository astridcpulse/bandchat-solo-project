const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
    rejectUnauthenticated,
  } = require('../modules/authentication-middleware');


router.put('/', rejectUnauthenticated, (req, res) => {
    console.log('req body', req.body.info)

    const sqlText = `UPDATE "part_data"
                    SET "chord_value" = $1,
                        "chord_mode" = $2,
                        "chord_text" = $3
                    WHERE "part_data".id = $4;`;
                    
    const sqlParams = [ 
                        req.body.info.noteVal,
                        req.body.info.mode,
                        req.body.info.text,
                        req.body.partId
                        ]

    pool.query(sqlText, sqlParams)
        .then((dbRes) => {  
            res.sendStatus(200);
        })
        .catch((dbErr) => {
            console.error('error in POST note', dbErr)
            res.sendStatus(500);
        });
});

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