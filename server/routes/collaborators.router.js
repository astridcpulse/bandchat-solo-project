
const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
    rejectUnauthenticated,
  } = require('../modules/authentication-middleware');

//gets all projects from database
//TODO should only get all projects of a particular user id
// router.get('/', rejectUnauthenticated, (req, res) => {

//     const sqlText = `SELECT * FROM "project_data" ORDER BY "id";`
//     pool.query(sqlText)
//         .then((dbRes) => {  
//             res.send(dbRes.rows);
//         })
//         .catch((dbErr) => {
//             console.error('error in GET projects', dbErr)
//             res.sendStatus(500);
//         });
// });


//post a new project to the database
router.post('/', rejectUnauthenticated, (req, res) => {
    console.log('req body', req.body.user_id)
    // req.user.id
    // const sqlText = `INSERT INTO "user_project_data" ("user_id", "project_id") VALUES ($1, $2);`
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
