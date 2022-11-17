
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


//post a collaborators involved with project to the database
router.post('/', rejectUnauthenticated, (req, res) => {
    console.log('req body proj', req.body.projectId)
    console.log('req body user', req.body.userId)

    const sqlText = `INSERT INTO "user_project_data" ("user_id", "project_id") VALUES ($1, $2);`
    const sqlParams = [req.body.userId, req.body.projectId];

    pool.query(sqlText, sqlParams)
        .then((dbRes) => {
            console.log('success in postCollaborators');
            res.sendStatus(200);
        })
        .catch((err) => {
            console.error('error in post collaborators', err);
            res.sendStatus(500);
        })
});

module.exports = router;
