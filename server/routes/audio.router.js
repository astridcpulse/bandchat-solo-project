const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');


router.delete('/', (req, res) => {
  // UPDATE the sql 
});


module.exports = router;
