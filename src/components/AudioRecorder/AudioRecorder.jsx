import { useState } from 'react';
import { useDispatch, useSelector} from 'react-redux';

import { Button } from '@mui/material';

function AudioRecorder({part}){
    const dispatch = useDispatch();
    const MicRecorder = require('mic-recorder-to-mp3');
    const Recorder = new MicRecorder({ bitRate: 128});

    //state for whether we're recording or not. And the "blob" as the encoded sound file
    const [recordStatus, setRecordStatus] = useState(true);
    const [blobUrl, setBlobUrl] = useState('');
    // const [soundBlob, setSoundBlob] = useState('');

  // start mic recorder function
    const start = () => {
        Recorder
          .start()
          .then(() => {
            setRecordStatus(true);
  
          })
          .catch((err) => console.error('Start error', err));
    }
  console.log('part', part.id)

  // stop mic recorder function
  const stop = () => {
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
        .catch((e) => console.log(e));
    }

    return(
        <>
            <Button 
              onClick={start} 
            >
              Record
            </Button>

            <Button 
              onClick={stop}
            >
              Stop
            </Button>
            <audio
              name="uploaded_audio"
              src={`http://localhost:3000${part.sound.replace('public', '')}`}
              controls
            />
            {/* http://localhost:3000/sound/sound_file-1669235449771.mp3 */}

        </>
    );
}

export default AudioRecorder;