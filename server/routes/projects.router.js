const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


//gets all projects from database
//TODO should only get all projects of a particular user id
router.get('/', (req, res) => {
    
    const sqlText = `SELECT * FROM "project_data" ORDER BY "id";`
    pool.query(sqlText)
        .then((dbRes) => {  
            res.send(dbRes.rows);
        })
        .catch((dbErr) => {
            console.error('error in GET projects', dbErr)
            res.sendStatus(500);
        });
});


//post a new project to the database
router.post('/', (req, res) => {

    const sqlText = `INSERT INTO "project_data" ("project_name") VALUES ($1);`
    const sqlParams = [req.body.name];
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
