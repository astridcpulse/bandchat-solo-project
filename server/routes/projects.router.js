const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
    rejectUnauthenticated,
  } = require('../modules/authentication-middleware');

//gets all projects from database
//TODO should only get all projects of a particular user id
router.get('/', rejectUnauthenticated, (req, res) => {

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

router.get('/:id', rejectUnauthenticated, async (req, res) => {
    try{
        const sqlText = `SELECT * FROM "project_data" WHERE "id" = $1;`;
        let dbRes = await pool.query(sqlText, [req.params.id])
        res.send(dbRes.rows);
    }
    catch (err) {
        console.error('error in GET current project', err);
        res.sendStatus(500);
    }
})

//post a new project to the database
router.post('/', rejectUnauthenticated, (req, res) => {
    // req.user.id
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

// delete a project based on id
router.delete('/:id', rejectUnauthenticated, (req, res) => {
    console.log('req.params id', req.params.id);

    // delete project data from the part_data table
    const sqlText1 = `DELETE FROM "part_data"
                        WHERE "project_id" = $1;`
    pool.query(sqlText1, [req.params.id])
        .then((dbRes) => {  

        // delete project data from the user_project_data table
            const sqlText2 = `DELETE FROM "user_project_data"
                    WHERE "project_id" = $1;`;
            pool.query(sqlText2, [req.params.id])
                .then((dbRes) => {  

                 // delete project data from the project_data
                    const sqlText3 = `DELETE FROM "project_data"
                                    WHERE "project_data".id = $1;`;
                    pool.query(sqlText3, [req.params.id])
                        .then((dbRes) => {  
                            res.sendStatus(200);
                        })
                        .catch((dbErr) => {
                            console.error('error in DELETE note', dbErr)
                            res.sendStatus(500);
                        });

                    // res.sendStatus(200);
                })
                .catch((dbErr) => {
                    console.error('error in DELETE note', dbErr)
                    res.sendStatus(500);
                });

            // res.sendStatus(200);
        })
        .catch((dbErr) => {
            console.error('error in DELETE note', dbErr)
            res.sendStatus(500);
        });
    
    

    
});

module.exports = router;
