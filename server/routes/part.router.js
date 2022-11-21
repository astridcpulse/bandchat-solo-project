const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
    rejectUnauthenticated,
  } = require('../modules/authentication-middleware');


//gets all parts assigned to a specified project ID
router.get('/:projectId', rejectUnauthenticated, (req, res) => {
    const sqlText = `SELECT * FROM "part_data" 
                    WHERE "project_id" = $1;`;
    
    pool.query(sqlText, [req.params.projectId])
        .then((dbRes) => {  
            res.send(dbRes.rows);
        })
        .catch((dbErr) => {
            console.error('error in GET projects', dbErr)
            res.sendStatus(500);
        });
});


//post a new part to the database
router.post('/', rejectUnauthenticated, (req, res) => {
    console.log('req body', req.body)
    // req.user.id
    const sqlText = `INSERT INTO "part_data" ("part_name", "notes", "chord_value", "chord_mode", "chord_text", "sound", "project_id") 
                    VALUES ($1, NULL, NULL, NULL, NULL, NULL, $2);`

    const sqlParams = [
                        req.body.name,
                        req.body.projectId
                        ];

    pool.query(sqlText, sqlParams)
        .then((dbRes) => {
            console.log('success in postPart');
            res.sendStatus(200);
        })
        .catch((err) => {
            console.error('error in post part', err);
            res.sendStatus(500);
        })
});


router.delete('/:id', rejectUnauthenticated, (req, res) => {
    console.log('req.params id', req.params.id);

    const sqlText = `DELETE FROM "part_data"
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
