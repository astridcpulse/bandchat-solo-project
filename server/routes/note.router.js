const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
    rejectUnauthenticated,
  } = require('../modules/authentication-middleware');


  router.put('/', rejectUnauthenticated, (req, res) => {
    console.log('req body', req.body)

    const sqlText = `UPDATE "part_data"
                    SET "notes" = $1
                    WHERE "part_data".id = $2;`;
                    
    const sqlParams = [ 
                        req.body.value, 
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

module.exports = router;
