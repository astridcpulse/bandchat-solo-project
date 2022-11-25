// import { useDispatch, useSelector} from 'react-redux';
// const dispatch = useDispatch();


const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');



const multer = require('multer');
const path = require('node:path');

//multer endpoint
const d = new Date();
  let time = Math.round(d.getTime());

const storage = multer.diskStorage({
  destination: './public/sound', 
  filename: function (req, file, cb) {
    cb(null, 'sound_file-'+ time +'.mp3');
  }
})

const upload = multer({
  storage: storage,
});

// end multer endpoint

router.put('/:id', rejectUnauthenticated, upload.single('uploaded_audio'), async (req, res)=> {

  console.log('req body for sound', req.file);
  try{
    const sqlText = `UPDATE "part_data"
                      SET "sound" = $1
                    WHERE "id" = $2;`;
    const sqlParams = [
                      req.file.path,
                      req.params.id
                    ];
  
  let dbRes = await pool.query(sqlText, sqlParams);
    }
    catch (err) {
      console.error('error in POST sound', err);
      res.sendStatus(500);
    }
});

router.delete('/:id', rejectUnauthenticated, (req, res) => {

  const sqlText = `UPDATE "part_data"
                  SET "sound" = NULL
                  WHERE "part_data".id = $1;`;

  pool.query(sqlText, [req.params.id])
      .then((dbRes) => {  
          res.sendStatus(200);
      })
      .catch((dbErr) => {
          console.error('error in DELETE audio', dbErr)
          res.sendStatus(500);
      });
});


module.exports = router;
