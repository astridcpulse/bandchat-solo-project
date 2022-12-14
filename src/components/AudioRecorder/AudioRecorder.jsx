import { useState } from 'react';
import { useDispatch, useSelector} from 'react-redux';

import { Button, Box } from '@mui/material';

//remove {part}
function AudioRecorder({part}){
    const dispatch = useDispatch();
    const MicRecorder = require('mic-recorder-to-mp3');
    const Recorder = new MicRecorder({ bitRate: 128});
    //state for whether we're recording or not. And the "blob" as the encoded sound file
    const [recordStatus, setRecordStatus] = useState(true);
    const [blobUrl, setBlobUrl] = useState('');
    const [buttonDisplay, setButtonDisplay] = useState(false)
    // const [soundBlob, setSoundBlob] = useState('');

  // start mic recorder function
    const start = (evt) => {
      evt.preventDefault();
        Recorder
          .start()
          .then(() => {
            setRecordStatus(true);
            
          })
          .catch((err) => console.error('Start error', err));
          // setButtonDisplay(true);
    }

  // stop mic recorder function
  const stop = (evt) => {
    evt.preventDefault();

      Recorder
        .stop()
        .getMp3()
        .then(([buffer, blob]) => {
         setRecordStatus(false);
         
          console.log('blob', blob);
          setBlobUrl(URL.createObjectURL(blob));
          
          dispatch({
            type: 'UPLOAD_AUDIO',
            payload: { 
              blob: blob,
              partId: part.id,
              projectId: part.project_id
            }
          })
    })
        .catch((err) => console.log('stop error', err));
        // setButtonDisplay(false);
        
    }

    return(
        <Box
          sx={{mx:5, width: 400}}
        >
            <Button
              onClick={(evt) => start(evt)}
              variant={buttonDisplay ? "outlined" : "contained"}
            >
              Record
            </Button>

            <Button 
              onClick={(evt) => stop(evt)}
              variant={buttonDisplay ? "contained" : "outlined" }
            >
              Stop
            </Button>
            <audio
              name="uploaded_audio"
              src={part.sound === null ? '' : `http://localhost:3000${part.sound.replace('public', '')}`}
              controls
            />
            {/* http://localhost:3000/sound/sound_file-1669235449771.mp3 */}

        </Box>
    );
}

export default AudioRecorder;