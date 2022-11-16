const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
    rejectUnauthenticated,
  } = require('../modules/authentication-middleware');

//gets all projects from database
//TODO should only get all projects of a particular user id
router.get('/', rejectUnauthenticated, (req, res) => {

    const sqlText = `SELECT * FROM "user";`
    
    pool.query(sqlText)
        .then((dbRes) => {  
            res.send(dbRes.rows);
        })
        .catch((dbErr) => {
            console.error('error in GET allUsers', dbErr)
            res.sendStatus(500);
        });
});

module.exports = router;
