const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
    rejectUnauthenticated,
  } = require('../modules/authentication-middleware');


//gets all parts assigned to a specified project ID
router.get('/:projectId', rejectUnauthenticated, async (req, res) => {
    try{
        const sqlText = `SELECT * FROM "part_data" 
                    WHERE "project_id" = $1;`;
        let dbRes = await pool.query(sqlText, [req.params.projectId]);
        res.send(dbRes.rows);
    }
    catch (err) {
        console.error('error in GET projects', err)
        res.sendStatus(500);
    }
});

//post a new part to the database
router.post('/', rejectUnauthenticated, (req, res) => {
    console.log('req body', req.body)
    const sqlText = `INSERT INTO "part_data" (
                        "part_name", 
                        "notes", 
                        "chord_value", 
                        "chord_mode", 
                        "chord_text", 
                        "sound", 
                        "project_id"
                        ) 
                    VALUES (
                        $1, 
                        NULL, 
                        NULL, 
                        NULL,
                        NULL, 
                        NULL, 
                        $2
                        );`

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

router.put('/', rejectUnauthenticated, async (req, res) =>{
    console.log('action payload part PUT', action.payload)
    try{
        const sqlText = `UPDATE "part_data"
                            SET
                            "part_name" = $1, 
                            "notes" = $2, 
                            "chord_value" = $3, 
                            "chord_mode" = $4, 
                            "chord_text" = $5, 
                            "sound" = $6, 
                            "project_id" = $7
                            `;
        const sqlParams = [
                            action.payload.part_name,
                            action.payload.notes,
                            action.payload.chord_value,
                            action.payload.chord_mode,
                            action.payload.chord_text,
                            action.payload.sound,
                            action.payload.project_id
                            ];
        let dbRes = await pool.query(sqlText, sqlParams);
        res.sendStatus(dbRes.rows);
    }
    catch (err) {
        console.error('error in PUT parts', err);
        res.sendStatus(500);
    }
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
